import passport from "passport";
import local from "passport-local"
import google from 'passport-google-oauth20';
import jwt from "passport-jwt"
import facebook from 'passport-facebook';
import { SECRET_KEY, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, BASE_URL, FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } from '../config/envConfig.js';
import { createHash, evaluatePassword } from "../utils/hash.util.js";
import Users from "../models/Users.js";
import HttpError from "../utils/error.util.js";
import { HttpCodes } from "../utils/HTTPCodes.util.js";

const LocalStrategy = local.Strategy;
const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;
const GoogleStrategy = google.Strategy
const FacebookStrategy = facebook.Strategy

const initializePassport = () => {
    passport.use(
        'register',
        new LocalStrategy(
            { passReqToCallback: true, usernameField: 'email' },
            async(req, email, password, done) => {
                try {
                    const newUser = req.body
					const registeredEmail = await Users.findOne({email})
					if(registeredEmail){
						const error = new HttpError('Email ya registrado', HttpCodes.CODE_UNAUTHORIZED)
						return done(error, false)
					}
                    newUser.password = await createHash(password)
					newUser.registration_method = 'manual'
                    return done(null, newUser)
                } catch (error) {
					console.log(error);
                    return done(error);
                }
            }
        )
    )

    passport.use(
		'login',
		new LocalStrategy(
			{ usernameField: 'email' },
			async (user, password, done) => {
				try {
					const registeredUser = await Users.findOne({ email: user }).lean()
					if(!registeredUser) {
						const error = new HttpError('Usuario no encontrado', HttpCodes.CODE_NOT_FOUND)
						return done(error, false)
					}
					const passControl = await evaluatePassword(registeredUser, password);
					if (!passControl) {
						const error = new HttpError('Usuario o contraseña incorrecta', HttpCodes.CODE_UNAUTHORIZED)
						return done(error, false)
					}
					const finalUser = { ...registeredUser };
					delete finalUser.password;
					return done(null, finalUser);
				} catch (error) {
					return done(error);
				}
			}
		)
	);

	passport.use(
		new GoogleStrategy(
			{
				clientID: GOOGLE_CLIENT_ID,
				clientSecret: GOOGLE_CLIENT_SECRET,
				callbackURL: `${BASE_URL}/api/session/auth/google/callback`,
			},
			async (accessToken, refreshToken, profile, done) => {
				const user = profile._json;
				const registeredUser = await Users.findOne({ email: user.email }).lean()
				if (!registeredUser) {
					const newUser = {
						first_name: user.given_name,
						last_name: user.family_name,
						email: user.email,
						password: null,
						age: null,
						registration_method: 'google',
						registration_date: Date.now(),
						profile_img: user.picture,
					};
					await Users.create(newUser)
					done(null, newUser);
				}
				const userDTO = {
					_id: registeredUser._id,
					first_name: registeredUser.given_name,
					last_name: registeredUser.family_name,
					email: registeredUser.email,
					profile_img: registeredUser.picture,
				};
				done(null, userDTO);
			}
		)
	);

	
	passport.use(new FacebookStrategy(
		{
		clientID: FACEBOOK_APP_ID,
		clientSecret: FACEBOOK_APP_SECRET,
		callbackURL: `${BASE_URL}/api/session/auth/facebook/callback`,
		profileFields: ['picture', 'email', 'first_name', 'last_name']
		},
		async (accessToken, refreshToken, profile, done) => {
			const user = profile._json;
			console.log(profile);
			const registeredUser = await Users.findOne({ facebook_id: user.id }).lean();
			if (!registeredUser) {
				const newUser = {
					first_name: user.first_name,
					last_name: user.last_name,
					email: null,
					password: null,
					age: null,
					registration_method: 'facebook',
					registration_date: Date.now(),
					profile_img: user.picture.data.url,
					facebook_id: user.id
				};
				await Users.create(newUser)
				done(null, newUser)
			}
			const userDTO = {
				_id: registeredUser._id,
				first_name: registeredUser.first_name,
				last_name: registeredUser.last_name,
				profile_img: registeredUser.profile_img,
			};
			done(null, userDTO);
		}
	));
	
	passport.use('jwt', new JWTStrategy(
		{
			jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
			secretOrKey: SECRET_KEY,
		}, 
		async (jwt_payload, done) =>{
			try {
				const { _id, iat, exp } = jwt_payload;
				return done(null, { _id, iat, exp });
			} catch (error) {
				return done(error)
			}
		}
	))
}

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser(async (user, done) => {
	done(null, user);
});

export default initializePassport
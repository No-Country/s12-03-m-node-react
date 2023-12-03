import passport from "passport";
import local from "passport-local"
import google from 'passport-google-oauth20';
import jwt from "passport-jwt"
import { SECRET_KEY, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, BASE_URL } from '../config/envConfig.js';
import { createHash, evaluatePassword } from "../utils/hash.util.js";
import Users from "../models/Users.js";

const LocalStrategy = local.Strategy;
const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;
const GoogleStrategy = google.Strategy

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
						console.log('Unable to create user, email already registered');
						return done(null, false, 'Unable to create user, email already registered')
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
						console.log('User not found');
						return done(null, false, 'User not found')
					}
					const passControl = await evaluatePassword(registeredUser, password);
					if (!passControl) {
						console.log('wrong user or password');
						return done(null, false, 'wrong user or password');
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
					name: user.given_name,
					surname: user.family_name,
					email: user.email,
					profileImg: user.picture,
				};
				done(null, userDTO);
			}
		)
	);

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
import passport from "passport";
import local from "passport-local"
import jwt from "passport-jwt"
import { createHash, evaluatePassword } from "../utils/hash.util.js";
import Users from "../models/Users.js";

const LocalStrategy = local.Strategy;
// const JWTStrategy = jwt.Strategy;

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
}

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser(async (user, done) => {
	done(null, user);
});

export default initializePassport
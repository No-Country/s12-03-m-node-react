import passport from "passport";
import local from "passport-local"
import jwt from "passport-jwt"
import { createHash, evaluatePassword } from "../utils/hash.util.js";

const LocalStrategy = local.Strategy;
const JWTStrategy = jwt.Strategy;

const initializePassport = () => {
    passport.use(
        'register',
        new LocalStrategy(
            { passReqToCallback: true, usernameField: 'email' },
            async(req, email, password, done) => {
                try {
                    const newUser = req.body
                    // Evaluar a través del controller de usuarios que este email no esté ya registrado en la DB
                    newUser.password = await createHash(password)
                    // Agregar a través del controller de usuarios al newUser a la DB
                    return done(null, newUser)
                } catch (error) {
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
					// Evaluar que el mail ingresado exista en la DB
					const passControl = await evaluatePassword(registeredUser, password); // registeredUser tiene el usuario de la DB
					if (!passControl) {
						return done(null, false, 'wrong user or password');
					}
					//Evitamos pasar los datos sensibles al token
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
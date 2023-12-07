import Router from 'express'
import passport from 'passport'
import { login, register } from '../controllers/session.controller.js'
import { BASE_URL } from '../config/envConfig.js'
import validateSchema from '../middlewares/schemasValidators.middlewares.js'
import { usersSchemaValidator } from '../utils/schemasValidators.utils.js'

const router = Router()

router.post(
    '/register', 
	validateSchema(usersSchemaValidator),
    passport.authenticate('register'), 
    register
)

router.post(
    '/login',
    passport.authenticate('login'),
    login
)

router.get(
	'/auth/google',
	passport.authenticate('google', { scope: ['profile', 'email'] }),
	login
);

router.get(
	'/auth/google/callback',
	passport.authenticate('google', {
		failureRedirect: `${BASE_URL}/iniciar-sesion`
	}),
	login,
);

router.get('/auth/facebook',
  passport.authenticate('facebook'),
  (req, res, next) => console.log(req.user),
  login
);

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: `${BASE_URL}/iniciar-sesion` }),
  login
)

export default router 
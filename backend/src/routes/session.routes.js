import Router from 'express'
import passport from 'passport'
import { login, register } from '../controllers/session.controller.js'
import { BASE_URL_FRONT } from '../config/envConfig.js'
import validateSchema from '../middlewares/schemasValidators.middlewares.js'
import { usersSchemaValidator } from '../utils/schemasValidators.utils.js'
import { typeConversor } from '../middlewares/typeConversor.middleware.js'

const router = Router()

router.post(
    '/register', 
    typeConversor,
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
);

router.get(
	'/auth/google/callback',
	passport.authenticate('google', {
		failureRedirect: `${BASE_URL_FRONT}`
	}),
  login,
	(req, res) => {
    res.redirect(BASE_URL_FRONT)
  }
);

router.get('/auth/facebook',
  passport.authenticate('facebook'),
  (req, res, next) => console.log(req.user),
  login
);

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: `${BASE_URL_FRONT}` }),
  login
)

export default router 
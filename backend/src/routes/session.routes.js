import Router from 'express'
import passport from 'passport'
import { login, register } from '../controllers/session.controller.js'
import { BASE_URL } from '../config/envConfig.js'

const router = Router()

router.post(
    '/register', 
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
		failureRedirect: `${BASE_URL}/iniciar-sesion`,
	}),
	login,
);

export default router 
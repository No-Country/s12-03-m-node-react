import Router from 'express'
import passport from 'passport'
import { login, register } from '../controllers/session.controller.js'

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

export default router 
import Router from 'express'
import passport from 'passport'

const router = Router()

router.post('/register', passport.authenticate('register'), (req, res) => res.status(201).send(req.user))

export default router
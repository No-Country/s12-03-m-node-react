import petsRouter from './pets.routes.js';
import sessionRoutes from './session.routes.js'
import usersRoutes from './users.routes.js'
import Router from 'express'

const router = Router();

router.use('/session', sessionRoutes)
router.use('/users', usersRoutes)
router.use('/pets', petsRouter)

export default router;


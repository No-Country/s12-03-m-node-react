import sessionRoutes from './session.routes.js'
import usersRoutes from './users.routes.js'
import Router from 'express'

const router = Router();

router.use('/session', sessionRoutes)
router.use('/users', usersRoutes)

export default router;
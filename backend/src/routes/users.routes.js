import Router from 'express'
import { deleteUser, deleteImageFromUserById, getUserById, getUsers, updateUserById } from '../controllers/users.controller.js'
import jwtAuth from '../middlewares/jwtAuth.middleware.js'

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUserById)
router.put('/:id', jwtAuth('jwt'), updateUserById)
router.delete('/:id/delete-image/:image_id', jwtAuth('jwt'), deleteImageFromUserById)
router.delete('/:id', jwtAuth('jwt'), deleteUser)

export default router 
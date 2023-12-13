import Router from 'express'
import { deleteUser, deleteImageFromUserById, getUserById, getUsers, updateUserById } from '../controllers/users.controller.js'

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUserById)
router.put('/:id', updateUserById)
router.delete('/:id/delete-image/:image_id', deleteImageFromUserById)
router.delete('/:id', deleteUser)

export default router 
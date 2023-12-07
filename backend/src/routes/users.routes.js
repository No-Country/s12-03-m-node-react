import Router from 'express'
import { deleteUser, getUserById, getUsers, updateUserById } from '../controllers/users.controller.js'
import passport from 'passport'

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUserById)
router.put('/:id', updateUserById)
router.delete('/:id', deleteUser)

export default router 
import express from 'express'
import { createUser, getUser, getUsers, deleteUser, updateUser } from '../controllers/users.js'

const router = express.Router()

router.get('/', getUser)

router.post('/', createUser)

router.get('/:id', getUsers)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router

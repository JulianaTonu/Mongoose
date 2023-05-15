import express from 'express';
import createUSer, {  getUserByid, getUsers } from './user.controller';
const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUserByid)
router.post('/create-user', createUSer)

export default router
import express from 'express'
import { validate } from './middleware.js';
import { addUser, getById,getAllUsers, updateById, deleteById } from './user-controller.js';

const router = express.Router();

// router.get('',getAllUsers)
// router.post('',validate, addUser)
// router.get('/:id',getById)
// router.put('/:id',updateById)
// router.delete('/:id',deleteById)
router.route('').post(validate,addUser).get(getAllUsers)
router.route('/:id').get(getById).put(updateById).delete(deleteById)

export default router;

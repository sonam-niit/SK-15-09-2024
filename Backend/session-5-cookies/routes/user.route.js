import express from 'express'
import { login, register, getUserprofile, getAllUsers,deleteUserById } from '../controllers/user.controller.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.post('/register',register);
router.post('/login',login);
router.get('/profile',auth,getUserprofile);
router.get('',getAllUsers);
router.delete('/:id',auth,deleteUserById);

export default router;
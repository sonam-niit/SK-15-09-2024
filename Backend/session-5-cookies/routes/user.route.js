import express from 'express'
import { login, register, getUserprofile } from '../controllers/user.controller.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.post('/register',register);
router.post('/login',login);
router.get('/profile',auth,getUserprofile);

export default router;
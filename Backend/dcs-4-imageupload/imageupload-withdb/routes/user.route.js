import express from 'express'
import { login, register, getUserprofile, getAllUsers,deleteUserById, imageUpload } from '../controllers/user.controller.js';
import auth from '../middlewares/auth.js';
import { upload } from '../middlewares/fileupload-middleware.js';

const router = express.Router();

router.post('/register',register);
router.post('/login',login);
router.get('/profile',auth,getUserprofile);
router.get('',getAllUsers);
router.delete('/:id',auth,deleteUserById);
router.post('/imageUpload',auth,upload.single('image'),imageUpload);

export default router;
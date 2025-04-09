import express from 'express'
import { addCategory, deleteCategory, getAllCategories } from '../controllers/category-controller.js';

const router= express.Router();

router.get('/',getAllCategories);
router.post('/',addCategory);
router.delete('/:id',deleteCategory);

export default router;
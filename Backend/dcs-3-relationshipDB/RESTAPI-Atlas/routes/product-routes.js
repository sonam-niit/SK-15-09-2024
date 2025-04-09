import express from 'express'
import { addproduct, deleteById, getAllProducts } from '../controllers/product-controller.js';

const router= express.Router();

router.get('/',getAllProducts);
router.post('/',addproduct);
router.delete('/:id',deleteById);

export default router;
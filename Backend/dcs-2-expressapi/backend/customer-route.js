import express from 'express'
import { addCustomer, deleteCustById, getAllCustomers, getCustById, updateCustById }
    from './customer-controller.js';

const router = express.Router();

router.post('', addCustomer)
router.get('', getAllCustomers)
router.get('/:id', getCustById)
router.put('/:id', updateCustById)
router.delete('/:id', deleteCustById)

export default router;



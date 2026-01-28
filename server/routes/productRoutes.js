import express from 'express'
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/productController.js';

const router = express.Router();

router.post('/create',createProduct);
router.get('/all',getProducts);
router.get('/:id',getProductById);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);

export default router;
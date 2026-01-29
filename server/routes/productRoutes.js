import express from 'express'
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/productController.js';
import { isAdmin, isAuth } from '../middlewares/isAuth.js';

const router = express.Router();

router.post('/create',isAuth,isAdmin,createProduct);
router.get('/all',getProducts);
router.get('/:id',getProductById);
router.put('/:id',isAuth,isAdmin,updateProduct);
router.delete('/:id',isAuth,isAdmin,deleteProduct);

export default router;
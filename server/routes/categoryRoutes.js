import express from 'express';
import { createCategory, getCategory } from '../controllers/categoryController.js';

const router = express.Router();

router.post('/create',createCategory);
router.get('/get',getCategory);

export default router;
import express from 'express';
import { createSubCategory, getSubCategory } from '../controllers/subCategoryController.js';


const router = express.Router();

router.post('/create',createSubCategory);
router.get('/get',getSubCategory);

export default router;
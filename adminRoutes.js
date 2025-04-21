import express from 'express';
import { getAllUsers } from '../controllers/adminController.js';
import { protect, admin } from '../middlewares/auth.js';

const router = express.Router();

router.get('/users', protect, admin, getAllUsers);

export default router;

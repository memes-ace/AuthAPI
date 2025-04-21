import express from 'express';
import { body } from 'express-validator';
import { getUserProfile, updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router.get('/profile', protect, getUserProfile);

router.put(
  '/profile/update',
  protect,
  [
    body('name').optional().trim().escape(),
    body('email').optional().isEmail().withMessage('Valid email is required').normalizeEmail(),
    body('password').optional().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  updateUserProfile
);

export default router;

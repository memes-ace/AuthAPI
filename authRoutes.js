import express from 'express';
import { body } from 'express-validator';
import {
  registerUser,
  loginUser,
  resetPassword,
} from '../controllers/authController.js';

const router = express.Router();

router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name is required').trim().escape(),
    body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  registerUser
);

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  loginUser
);

router.post(
  '/reset-password',
  [
    body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
    body('newPassword').isLength({ min: 6 }).withMessage('New password must be at least 6 characters'),
  ],
  resetPassword
);

export default router;

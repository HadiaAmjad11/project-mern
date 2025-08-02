import express from 'express';
import { signin, signup, googleSignIn } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', googleSignIn);  // Correct path and handler

export default router;

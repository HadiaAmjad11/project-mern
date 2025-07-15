// routes/user.route.js
import express from 'express';
import { test } from '../controllers/user.controller.js'; 
const router = express.Router();

// Option 2: Using a controller function
router.get('/test', test);

export default router;

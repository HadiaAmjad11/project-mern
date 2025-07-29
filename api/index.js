// index.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

// Load environment variables from .env
dotenv.config();

const app = express();

// Middleware
app.use(express.json());      // To parse JSON requests
app.use(cors());              // Enable CORS for frontend
app.use(morgan('dev'));       // Log HTTP requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Root route (health check)
app.get('/', (req, res) => {
  res.send('🌐 API is running...');
});

// API routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

// Global error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
 
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

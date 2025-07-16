// index.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// Root test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});


app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);




// Start the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

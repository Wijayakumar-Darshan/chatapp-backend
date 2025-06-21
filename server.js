import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Add CORS middleware to allow frontend requests with credentials (cookies)
app.use(
  cors({
    origin: "http://localhost:3000", // frontend URL
    credentials: true,               // allow cookies to be sent
  })
);

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Start server and connect to MongoDB
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`✅ Server Running on http://localhost:${PORT}`);
});

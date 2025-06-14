// backend/server.js

import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import { initSocket } from "./socket/socket.js"; // import your socket logic

dotenv.config();

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://chatapp-lnjis9vt7-wijayakumar-darshans-projects.vercel.app"
  ],
  credentials: true
}));
app.use(express.json());

// Init socket.io
initSocket(server);

// Test route
app.get("/", (req, res) => {
  res.send("✅ ChatApp backend is running!");
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

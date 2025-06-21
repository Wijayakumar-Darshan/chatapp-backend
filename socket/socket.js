<<<<<<< HEAD
import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: ["http://localhost:3000"],
		methods: ["GET", "POST"],
	},
});

export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};

const userSocketMap = {}; 

io.on("connection", (socket) => {
	console.log("a user connected", socket.id);

	const userId = socket.handshake.query.userId;
	if (userId != "undefined") userSocketMap[userId] = socket.id;

	io.emit("getOnlineUsers", Object.keys(userSocketMap));
 
	socket.on("disconnect", () => {
		console.log("user disconnected", socket.id);
		delete userSocketMap[userId];
		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});
});

export { app, io, server };
=======
// backend/socket/socket.js

import { Server } from "socket.io";

let io;
const userSocketMap = {}; // userId: socket.id

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

export const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: [
        "http://localhost:3000", // local frontend
        "https://chatapp-lnjis9vt7-wijayakumar-darshans-projects.vercel.app" // your deployed frontend
      ],
      methods: ["GET", "POST"],
      credentials: true
    }
  });

  io.on("connection", (socket) => {
    console.log("✅ A user connected:", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId && userId !== "undefined") {
      userSocketMap[userId] = socket.id;
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
      console.log("❌ A user disconnected:", socket.id);
      for (const key in userSocketMap) {
        if (userSocketMap[key] === socket.id) {
          delete userSocketMap[key];
          break;
        }
      }

      io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
  });
};
>>>>>>> 76fdae3f9610069adccd8129c21e3a11608b7f15

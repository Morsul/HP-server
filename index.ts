import express, { Request, Response } from 'express';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    methods: ['GET', 'POST'],
  },
});

httpServer.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

io.on('connection', (socket) => {
  console.log('user connected');
  socket.join('game2');
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
  socket.on('send-message', function () {
    console.log(`message from ${socket.id}`);
    io.to('game2').emit('recive-msg');
  });
});

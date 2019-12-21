const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let onlineUsers = [];

io.on('connection', socket => {
    socket.on('userLogin', ({ uid, userName }) => {
        onlineUsers.push({ uid, userName });
        io.sockets.emit('onlineUsers', onlineUsers);
    });

    socket.on('userDisconnect', uid => {
        onlineUsers = onlineUsers.filter(user => user.uid != uid);
        io.sockets.emit('onlineUsers', onlineUsers);
    });
});

server.listen(process.env.PORT || 3001, () => {
    console.log(`app is running on port ${process.env.PORT || 3001}`);
});

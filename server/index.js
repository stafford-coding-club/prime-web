'use strict'

import express from "express";
import socket from "socket.io";

const PORT = process.env.PORT || 3000;
const app = express();

const server = app.listen(PORT, function(){
   console.log(`Listening on port ${PORT}...`);
});

const io = socket(server);

const index = require(`./serve`);

app.use('/', index);

io.sockets.on('connection', socket => {
   console.log(`NEW CONNECTION! ${socket.id}`);
   
   socket.on('click', data => {
      socket.broadcast.emit('clicked', data);
   });

});

module.exports = app;
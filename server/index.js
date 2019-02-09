'use strict'

import express from "express";
import socket from "socket.io";
import path from "path";

const PORT = process.env.PORT || 3000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

const server = app.listen(PORT, function(){
   console.log(`Listening on port ${PORT}...`);
});

const io = socket(server);

const index = require(`./serve`);

app.use('/', index);

io.sockets.on('connection', socket => {
   console.log(`NEW CONNECTION! ${socket.id}`);
   
   socket.on('click', data => {
      console.log('GOT CLICK EVENT! EMITTING CLICKED EVENT!');
      socket.broadcast.emit('clicked', data);
   });

});

module.exports = app;
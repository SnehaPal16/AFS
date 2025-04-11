const express = require('express');
const app = require('express')();
const server = require('http').createServer(app); 
const io = require('socket.io')(server);
app.use(express.static(__dirname+"/public"))

io.on("connection" ,(socket) => {
    console.log("New person connected with Id :" + socket.id);
    socket.emit("message" , "hello from server");
    socket.on("hi" , (data) => {
        console.log(data);
    })
    io.emit("message" , "hello to my chat app");
});


server.listen(3000); 
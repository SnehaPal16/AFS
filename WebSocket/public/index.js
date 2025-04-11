const socket = io();

socket.on("connect " , () => {
    console.log("Connected to server with ID : " + socket.id);
});

socket.on("message" , (message) => {
    console.log("Message from server : " + message);
})
socket.emit("hi" , "Hello from client");
var express = require('express')();
var http = require('http').Server(express);
//Create server socket
var io  = require('socket.io')(http);

//Listen "connection" message from client socket
io.on('connection', function (socket) {
    console.log('Connected');
    //Listen for "chat msg" message from ANY client
    socket.on('chat msg', function (data) {
        io.emit('new message', data);
    });
});

//Make root context router to return index.html
express.get('/', function (req, res) {
    res.sendfile('index.html');
});
express.get('/chat_scripts.js', function (req, res) {
    res.sendfile('chat_scripts.js');
});
http.listen(3000, function () {
    console.log('Listening to :3000');
});
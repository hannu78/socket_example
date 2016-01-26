window.onload = function (event) {
    console.log("Chat ready");
    //Connect to server with socket
    var socket = io();
    //Get "send" object
    var btnSend = document.getElementById('send');
    //Add click listener
    btnSend.onclick = function () {
        var msg = document.getElementById('chat_message');
        console.log(msg.value);
        //msg.value or an object can be sent to server
        var nick = document.getElementById('nick');
        var dataToServer = {
            name: nick.value,
            message: msg.value
        }
        //Send object to server
        socket.emit('chat msg', dataToServer);
        msg.value = "";
    }
    socket.on('new message', function (data) {
        var textArea = document.getElementById('messages');
        textArea.value += data.name + ": " + data.message + "\n";
    })
}
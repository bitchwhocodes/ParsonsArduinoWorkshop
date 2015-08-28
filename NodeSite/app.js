var http = require('http'),
  fs = require('fs'),
  // okay sync just cos its booting this bad stuff up
  index = fs.readFileSync(__dirname + '/index.html');

// K i am sending back a basic file here yo
var app = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(index);
});
app.listen(3000);





// Socket.io server listens to our app
var io = require('socket.io').listen(app);


io.on('connection', function (socket) {
  socket.emit('welcome', { message: 'Welcome!', id: socket.id });
  io.on('sent', function (data) {
    io.emit('message', { msg: 'node got it' + data });
  });
});

var counter = 0;
// Send current time to all connected clients
function sendMessage() {
  counter++;

  io.emit('time', counter);
}

// Send current time every 10 secs
setInterval(sendMessage, 1000);
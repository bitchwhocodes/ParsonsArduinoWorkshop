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
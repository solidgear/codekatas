var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var stock = 5;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/stock.html');
});

app.get('/stock', function(req, res){
  res.send('{"stock": ' + stock + '}');
});

app.get('/operator', function(req, res){
  res.sendFile(__dirname + '/operator.html');
});

io.on('connection', function(socket){
  console.log('user connected');
  io.emit('stock refresh', stock);
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('stock modify', function(q){
    console.log('stock modified in ' + q);
    stock += parseInt(q);
    io.emit('stock refresh', stock);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

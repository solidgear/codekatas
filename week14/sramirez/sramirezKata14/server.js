var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var stock = '{"manzanas": 7, "peras": 5}';

app.use(express.static(__dirname + '/front'));
app.use(bodyParser.json());

app.set('port', 3456);
app.listen(app.get('port'));
app.get('/stock', function(req, res) { res.send(stock) } );
app.post('/stock', function(req, res) { stock = req.body; res.send(200) } );

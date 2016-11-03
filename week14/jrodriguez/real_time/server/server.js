var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var mongoose = require('mongoose');
var cors = require('cors');
var env = require('./environment.js');
var morgan = require('morgan');
var logger = morgan('tiny');
var http = require('http').Server(app);
var io = require('socket.io')(http);

// set native promises as default
mongoose.Promise = global.Promise;

// Create the mongoose schema
var ProductSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true,
        index: { unique: true }
    },
    amount: {
        type: Number,
        required: true,
        min: [0, 'Negative amounts are not allowed']
    }
});

// Register new model with mongoose.
var Product = mongoose.model('products', ProductSchema);

// add cors support
app.use(cors());

// json body parsing
app.use(bodyParser.json())

// log every request attemt
app.use(logger);


// GET: fetch all products
router.get('/products', function(req, res){
    var query = Product.find({}).sort('name');
    query.exec()
    .then(function(products) {
        res.send(products);
    })
    .catch(function(e) {
        res.status(500).json({error: e});
    });
});

// POST: add a new product
router.post('/products', function(req, res){
    var data = req.body;
    
    var product = new Product({
        name: data.name,
        amount: data.amount
    });
    product.save()
    .then(function(pr){
        //emit add event
        io.emit('stock-add', pr);
        //send response
        res.send(pr);
    })
    .catch(function(e) {
        res.status(500).json({error: e});
    });
});

// PUT: modify a product
router.put('/products/:id', function(req, res){
    var id = req.params.id;
    var data = req.body;
    
    var query = Product.findById(id);
    query.exec()
    .then(function(pr){
        if (pr !== null) {
            pr.name = data.name;
            pr.amount = data.amount;
            pr.save()
            .then(function(result){
                //emit change event
                io.emit('stock-change', result);
                //send response
                res.send(result);
            })
            .catch(function(e) {
                res.status(500).json({error: e});
            });
        } else {
            res.sendStatus(400);
        }
    })
    .catch(function(e) {
        res.status(500).json({error: e});
    })
});

// DELETE: remove a product
router.delete('/products/:id', function(req, res){
    var id = req.params.id;
    var query = Product.findByIdAndRemove(id);
    query.exec()
    .then(function(result){
        console.log('res', result);
        if(result == null) {
            res.sendStatus(400);
        } else {
            //emit delete event
            io.emit('stock-delete', result);
            //send response
            res.send({result: 'ok'});
        }
    })
    .catch(function(e) {
        res.status(500).json({error: e});
    })
});

// use this prefix
app.use('/api', router);

var dbHost = env.DB.HOST;
var dbPort = env.DB.PORT;
var dbName = env.DB.DB_NAME;

mongoose.connect('mongodb://' + dbHost + ':' + dbPort + '/' + dbName)
.then(function() {
    // one we are connected to the db we start the server
    console.log('connected to db');
    http.listen(3000, function(){
        console.log('listening on *:3000');
    });
})
.catch(function() {
    console.log('error while connecting to db');
});


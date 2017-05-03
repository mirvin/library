/**
 * Created by MIrvin on 5/3/2017.
 */
var express = require('express');

//Creates an instance of express
var app = express();

//Express will listen on this port
var port =5000;
app.get('/', function(req,res){
    res.send('hello slash')
});
app.get('/books', function(req,res){
    res.send('hello books')
});

//when app.listen is done doing what it is doing, it will call this function
app.listen(port, function(err){
    console.log('running server on port ' + port);
});

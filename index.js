var express = require('express');
var app = express();
var server = require('http').Server(app);

const PORT = process.env.PORT || 8080;
/*
app.use('/assets',express.static(__dirname + '/public/assets'));
app.use('/images',express.static(__dirname + '/public/images'));
app.use('/states',express.static(__dirname + '/public/states'));

app.get('/',function(req,res){
    console.log("home");
    res.sendFile(__dirname+'/public/index.html');
});

app.get('/discrimination',function(req,res){
    console.log("discri");
    res.sendFile(__dirname+'/public/discrimination.html');
});

app.get('/results',function(req,res){
    res.sendFile(__dirname+'/public/results.html');
});*/

app.get('/',function(req,res){
    //console.log("discri");
    res.sendFile(__dirname+'/Therapist_Tool.sozi.html');
});

server.listen(PORT,function(){ // Listens to port 8000
    console.log('Listening on port '+server.address().port);
});

const express = require('express')
const app = express();
var path = require('path');
const port = 8000;

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile('./public/html/index.html', {root: __dirname});
});

app.get('/login', function(req, res){
    res.sendFile('./public/html/Login.html', {root: __dirname});
});

app.get('/signin', function(req, res){
    res.sendFile('./public/html/SignIn.html', {root: __dirname});
});

app.get('/factures', function(req, res){
    res.sendFile('./public/html/Factures.html', {root: __dirname});
});

app.get('/map', function(req, res){
    res.sendFile('./public/html/Map.html', {root: __dirname});
});

app.get('/vehicules', function(req, res){
    res.sendFile('./public/html/Vehicules.html', {root: __dirname});
});

app.get('/contact', function(req, res){
    res.sendFile('./public/html/Contact.html', {root: __dirname});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

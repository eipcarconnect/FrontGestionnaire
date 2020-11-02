const express = require('express')
const app = express();
const port = 8000;

app.get('/', function(req, res){
    res.sendFile('./src/html/index.html', {root: __dirname});
});

app.get('/Contact', function(req, res){
    res.sendFile('./src/html/Contact.html', {root: __dirname});
});

app.get('/Factures', function(req, res){
    res.sendFile('./src/html/Factures.html', {root: __dirname});
});

app.get('/Map', function(req, res){
    res.sendFile('./src/html/Map.html', {root: __dirname});
});

app.get('/Vehicules', function(req, res){
    res.sendFile('./src/html/Vehicules.html', {root: __dirname});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

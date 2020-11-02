const express = require('express')
const app = express();
const port = 8000;

app.get('/', function(req, res){
    res.sendFile('./src/html/index.html', {root: __dirname});
});

app.get('/login', function(req, res){
    res.sendFile('./src/html/Login.html', {root: __dirname});
});

app.get('/signin', function(req, res){
    res.sendFile('./src/html/SignIn.html', {root: __dirname});
});

app.get('/factures', function(req, res){
    res.sendFile('./src/html/Factures.html', {root: __dirname});
});

app.get('/map', function(req, res){
    res.sendFile('./src/html/Map.html', {root: __dirname});
});

app.get('/vehicules', function(req, res){
    res.sendFile('./src/html/Vehicules.html', {root: __dirname});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

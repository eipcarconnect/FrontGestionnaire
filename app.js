var bodyParser = require('body-parser');
const express = require('express')
const app = express();
var path = require('path');
const port = process.env.PORT || 8000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extend:true}));

app.get('/', function(req, res){
    res.sendFile('./public/html/index.html', {root: __dirname});
});

app.get('/index', function(req, res){
    res.render('pages/Index');
});

app.get('/login', function(req, res){
    res.render('pages/Auth', {auth: true});
});

app.get('/signin', function(req, res){
		res.render('pages/Auth', {auth: false});
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

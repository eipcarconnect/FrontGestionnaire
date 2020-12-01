var bodyParser = require('body-parser');
const express = require('express')
const app = express();
var path = require('path');
var nodemailer = require('nodemailer');
const port = process.env.PORT || 8000;
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'eipcarconnect@gmail.com',
		pass: 'r%MW-B8ykq'
	}
});


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extend:true}));

app.get('/', function(req, res) {
    res.sendFile('./public/html/index.html', {root: __dirname});
});

app.get('/index', function(req, res){
	res.sendFile('./public/html/index.html', {root: __dirname});
});

app.get('/vehicules', function(req, res){
	res.sendFile('./public/html/index.html', {root: __dirname});
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

app.get('/trajets', function(req, res){
    res.sendFile('./public/html/Trajets.html', {root: __dirname});
});

app.get('/contact', function(req, res){
    res.sendFile('./public/html/Contact.html', {root: __dirname});
});

app.post('/contactus', function(req, res){
		console.log(req.body);
		sendMail(req.query.from, req.query.subject, req.query.content, req.name);
		res.sendFile('./public/html/Contact.html', {root: __dirname});
});

app.get('/public/js/auth.js', function(req, res){
    res.sendFile('./public/js/auth.js', {root: __dirname});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});


function sendMail(from, subject, text, name)
{
	var mailOptions = {
	  from: from,
	  to: 'eipcarconnect@gmail.com',
	  subject: subject + " par " + name+ " ( " + from + " )",
	  text: text
	};

	// transporter.sendMail(mailOptions, function(error, info){
	//   if (error) {
	//     console.log(error);
	//   } else {
	//     console.log('Email sent: ' + info.response);
	//   }
	// });
}

const express = require('express');
const http = require('http');
const path = require('path');
const passport = require('passport');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const errorhandler = require('errorhandler');
var app= express();
//const config = require('./config/config');


var server = http.createServer(app);
 app.engine('html', require('ejs').renderFile);
 app.set('view engine', 'html');
   

	
var port = process.env.PORT || 5001; 
server.listen(port);
app.set('views', __dirname + '/public');
app.use(express.static(__dirname + '/public')); 

app.use(morgan('combined'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session(
  {
    resave: true,
    saveUninitialized: true,
    secret: 'makingthisalonghardtoreadstringwithalotofstufscsncjndsk'
  }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

require('./config/routes')(app, passport);


app.get('/', function(req, res) {
	res.sendfile('./public/views/login.html'); //add the dashboard file, it will redirect it. 
});


app.get('/logout', function(req, res) {
	res.sendfile('./public/views/login.html');   //add logout url by indu 
});

exports = module.exports = app;     

console.log('http://localhost:'+port);

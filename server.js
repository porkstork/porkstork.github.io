var express = require('express');
var app = express();
//set up express to use
var path = require('path');

app.set('view engine', 'ejs');
//using ejs

app.use('/images', express.static(path.join(__dirname, 'images')));
//Routing for the favicon
app.use(express.static(__dirname + '/favicon.ico'));

app.use('/Scripts', express.static(path.join(__dirname, 'Scripts')))

app.use(express.static(__dirname + '/Scripts'))
//routing to the Scripts.js file

app.use('/css', express.static(path.join(__dirname, 'css')))

app.use(express.static(__dirname + '/styles.css'))
//routing to the css stylesheet

app.use('/images', express.static(path.join(__dirname, 'images')))
//routing for the pibble image
app.use(express.static(__dirname + '/pibble.png'))

app.use('/images', express.static(path.join(__dirname, 'images')))
//routing for the sponge the user will drag
app.use(express.static(__dirname + '/sponge.jpg'))

app.get ('/', function(req, res) {
	res.render('pages/index');
});

app.get ('/index', function(req, res) {
	res.render('pages/index');
});
//routing to the first page in the website

app.use((req, res) => {
    res.status(404).render('404');
});


app.listen(8080);

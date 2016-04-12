var express = require('express'),
	hbs  = require('express-handlebars'),
	request = require("request"),
	url = require('url');

var app = express();
app.engine('handlebars', hbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Static assets
app.use(express.static(__dirname + '/static'));

// Index
app.get('/', function (req, res) {
	res.render('index', {
		title: "Space"
	});
});

var server_port = process.env.WEBPORT || 8080;
var server_ip_address = process.env.WEBIP || '127.0.0.1';

app.listen(server_port, server_ip_address);
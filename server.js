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

var server_port = process.env.PORT || 8080;

app.listen(server_port);
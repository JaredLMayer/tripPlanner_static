var express = require('express'),
		morgan = require('morgan'),
		bodyParser = require('body-parser'),
		swig = require('swig'),
		routes = require('./routes/'),
		path = require('path'),
		app = express();

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

app.use(function(err, req, res, next){
  console.log(err);
  res.sendStatus(500);
});

module.exports = app;


var app = require('./app'),
	http = require('http');

http.createServer(app).listen(process.env.PORT || 3000, function(){
	console.log('Server is running on ' + (process.env.PORT || 3000))
});
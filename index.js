var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
	// This callback is the request handler
	fs.readFile('index.txt', function(error, data) {
		// Inner callback handles reading and writing
		if (!error) {
			response.write(data);
		} else {
			response.write('Uh oh ERROR');
		}
		response.end();
	});
});

server.listen(9001);
console.log('Server running at localhost:9001');
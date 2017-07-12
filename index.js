const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
	console.log('request has made:' + req.url);
	res.writeHead(200, {'Content-Type': 'text/html'});
	const myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
	myReadStream.pipe(res);

});

const port = 3000;
server.listen(port, 'localhost');
console.log('Server running in port ' + port);
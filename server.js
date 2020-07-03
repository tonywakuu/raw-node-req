var http = require('http'), 
    fs = require('fs'),
    fuelCycle = require('./lib/coordis')
    apd = require('./airportdata.json');

var server = http.createServer((req, res) => {
    if (req.method == 'POST') {
        console.log("POST Request");
        var body = apd;
        req.on('data', (data) => {
            console.log(data)
            console.log("Partial body: " + fuelCycle(7674, 3974));
        });
        req.on('end', () => {
            console.log("Body: " );
        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('post received');
    } else {
        console.log("GET Request");
        var html = fs.readFileSync('index.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    }
});

var port = 3000, 
    host = '127.0.0.1';

server.listen(port, host);

console.log('Listening at http://' + host + ':' + port);
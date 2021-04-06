const fs = require('fs');
const path = require('path');
const http = require('http');

http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write(err);
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        }
    });
}).listen(8080);
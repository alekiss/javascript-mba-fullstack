var express = require('express');

var hostname = 'localhost';

var port = 3000;
var app = express();

app.use(express.static(__dirname + '/public'));

app.all('/books', function(req, res, next) {
    res.writeHead(200, {'Content-type': 'text/plain'});
    next();
});

app.get('/books', function(req, res, next) {
    res.end('Will send all the books to you!')
});

app.get('/books/:bookId', function(req, res, next) {
    res.end('Will send all the books to you!' + req.params.bookId + ' to you')
});

app.listen(port, hostname, function(){
    console.log(`Servidor rodando em: http//${hostname}:${port}/`)
});
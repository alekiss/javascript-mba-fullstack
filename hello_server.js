var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {

    if(request.url == "/"){
        fs.readFile(__dirname + '/home.html', function(erro, html){
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(html);
            response.end();
        })
    }

    else if(request.url == "/bemvindo"){
        fs.readFile(__dirname + '/bemvindo.html', function(erro, html){
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(html);
            response.end();
        })
    }

    else{
        fs.readFile(__dirname + '/erro.html', function(erro, html){
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(html);
            response.end();
        })
    }
})

server.listen(3000, function(){
    console.log('Servidor Hello World rodando!')
});
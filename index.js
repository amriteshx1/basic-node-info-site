var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var pathname = q.pathname === "/" ? "/index" : q.pathname;
    var filename = "." + pathname + ".html";

    fs.readFile(filename, function(err,data){
        if(err){
            fs.readFile("./404.html", function(err2, data2){
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end(data2);
            })
            return;
        }
        res.writeHead(200,  {'Content-Type': 'text/html'});
        return res.end(data);
    })
}).listen(8080);
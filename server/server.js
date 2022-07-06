var http = require('http')
var static = require('node-static')

var path = new static.Server(`${__dirname}index.js`)

http.createServer(function(req,res){
    req.addListener('end', function(){
        path.serve(req,res);
    }).resume()
}).listen(3000)

console.log("Servidor rodando em novo local")
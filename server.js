var http = require('http');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic("./website");

var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
});

const PORT = 8000

server.listen(PORT, () => {
  console.log(`Server listening: http://localhost:${PORT}`)
});

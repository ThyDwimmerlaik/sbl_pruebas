var http = require('http');

http.createServer(function (req, res) {
  // set up some routes
  switch(req.url) {
    case '/':
	  // show the user a simple form
	  console.log("[200] " + req.method + " to " + req.url);
	  res.writeHead(200, "OK", {'Content-Type': 'text/html'});
	  res.write('<html><head><title>Hello Noder!</title></head><body>');
	  res.write('<h1>Welcome Noder, who are you?</h1>');
	  res.write('<form enctype="application/x-www-form-urlencoded" action="/formhandler" method="post">');
	  res.write('Name: <input type="text" name="username" value="John Doe" /><br />');
	  res.write('Age: <input type="text" name="userage" value="99" /><br />');
	  res.write('<input type="submit" />');
	  res.write('</form></body></html');
	  res.end();
	  break;
	case '/formhandler':
	  console.log("[501] " + req.method + " to " + req.url);
	  res.writeHead(501, "Not implemented", {'Content-Type': 'text/html'});
	  res.end('<html><head><title>501 - Not implemented</title></head><body><h1>Not implemented!</h1></body></html>');
	  break;
    default:
      res.writeHead(404, "Not found", {'Content-Type': 'text/html'});
      res.end('<html><head><title>404 - Not found</title></head><body><h1>Not found.</h1></body></html>');
      console.log("[404] " + req.method + " to " + req.url);
  };
}).listen(8080); // listen on tcp port 8080 (all interfaces)
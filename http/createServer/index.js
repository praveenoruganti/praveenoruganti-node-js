var http = require("http");

var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<html><body style="background-color:grey;text-align:center;font-size:100;font-weight:bold"><p>This is Home Page.</p></body></html>'
    );
    res.end();
  } else if (req.url == "/user") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<html><body style="background-color:green;text-align:center;font-size:100;font-weight:bold"><p>This is User Page.</p></body></html>'
    );
    res.end();
  } else if (req.url == "/admin") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<html><body style="background-color:orange;text-align:center;font-size:100;font-weight:bold"><p>This is Admin Page.</p></body></html>'
    );
    res.end();
  } else if (req.url == "/data") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "Sample Data" }));
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(
      '<html><body style="background-color:red;text-align:center;font-size:100;font-weight:bold"><p>Invalid Request</p></body></html>'
    );
    res.end();
  }
});

server.listen(5000);

console.log("Node.js web server at port 5000 is running..");

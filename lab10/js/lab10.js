// Name: Buddie Powell
// Date: 05/06/2026
// Date: Advanced JavaScript Mon-Wens 10:30am-12:10pm

// these are the constansts for the http and the and the file system
const http = require("http");
const fs = require("fs");

// creates a server with the html content of hello world!
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello World!</h1>");
});

// listens for the server on port 3333 and then creates a console.log message
server.listen(3333, () => {
  console.log(`Listening on port 3333`);
});

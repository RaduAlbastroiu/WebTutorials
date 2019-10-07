// Create a webserver

var http = require("http");
http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("This is before the end\n");
    response.end("Hello World\n");
  })
  .listen(3000);
console.log("Server running on port 3000");

// Handle http route GET / and POST / i.e. Home

// Handle http route GET /:username i.e. /chalkers

// Function that handles the reading of files and merg in value

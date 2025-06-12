// Import the 'http' module, which provides functionality for creating HTTP servers.
const http = require('http');

// Define the hostname where the server will run. '0.0.0.0' makes the server
// listen on all available network interfaces, which is necessary when running
// inside a Docker container to be accessible from outside the container.
const hostname = '0.0.0.0';

// Define the port number on which the server will listen for incoming requests.
const port = 3000;

// Create an HTTP server.
// The callback function is executed whenever a request is received by the server.
// 'req' is the request object, and 'res' is the response object.
const server = http.createServer((req, res) => {
  // Set the HTTP status code for the response. 200 means "OK".
  res.statusCode = 200;

  // Set the 'Content-Type' header of the response to 'text/plain'.
  // This tells the client (e.g., web browser) that the response body is plain text.
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body.
  // The server will close the connection after sending this.
  res.end('Hello, World!\n');
});

// Start the server and make it listen for connections on the specified hostname and port.
server.listen(port, hostname, () => {
  // This callback function is executed once the server starts successfully.
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log('Open your web browser and navigate to this address to see "Hello, World!"');
});

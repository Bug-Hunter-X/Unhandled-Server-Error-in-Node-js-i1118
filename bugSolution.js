const http = require('http');

const server = http.createServer((req, res) => {
  // Logic to handle incoming requests
  // ...
  res.end();
});

const port = 3000;

// Handle server errors gracefully
server.on('error', err => {
  console.error('Server encountered an error:', err);
  // Add more robust error handling here: e.g., restart the server, alert monitoring systems
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Simulate an error
setTimeout(() => {
    server.emit('error', new Error('Simulated server error'));
}, 5000);
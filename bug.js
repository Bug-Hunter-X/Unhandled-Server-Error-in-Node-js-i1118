const http = require('http');

const server = http.createServer((req, res) => {
  // Logic to handle incoming requests
  // ...
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Simulate an error
setTimeout(() => {
    server.emit('error', new Error('Simulated server error'));
}, 5000);
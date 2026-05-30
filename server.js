const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Hola desde mi servidor Node.js en Termux\n');
});

server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

# Sesión 6 - Marketplace de Digital Ocean

* Es una tienda de aplicaciones o droplets preconfigurados para desplegar en minutos, incluso segundos.

* A continuación, se muestra cómo levantar un servidor en nodejs.

```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

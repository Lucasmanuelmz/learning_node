const http = require('http');

http.createServer((req, res) => {
res.writeHead(200, {'content-type': 'text/explain'});
res.end('Olá mundo!')
})
.listen(8000, '127.0.0.1');
console.log('Servidor executando em 127.0.0.1')
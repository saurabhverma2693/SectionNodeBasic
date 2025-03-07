const http = require('http');
 const server = http.createServer((req,res)=>{
console.log(req.url,req.headers,req.method,req);
// process.exit();
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><tittle>My First Page</tittle></head>');
res.write('<body><h>Hello from my node.js server....</h></body>');
res.write('</html>');
res.end();

});
server.listen(3000);
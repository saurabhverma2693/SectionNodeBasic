const http = require('http');
 const server = http.createServer((req,res)=>{
console.log(req.url,req.headers,req.method,req);
// process.exit();

});
server.listen(3000);
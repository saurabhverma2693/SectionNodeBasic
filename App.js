const http = require('http');
const fs = require('fs');
const { text } = require('stream/consumers');
 const server = http.createServer((req,res)=>{
const URL = req.url;
const Method = req.method;
if(URL === '/'){
    
    res.write('<html>');
    res.write('<head><tittle>Enter Message</tittle></head>');
    res.write('<body><form action="/message" method="POST"><input type ="text" name="message"> <button type="submit">Send</button> </form></body>');
    res.write('</html>');
   return res.end();
    
} 

if(URL === '/message' && Method === "POST"){
fs.writeFileSync('message.txt','Dummy');
res.statusCode = 302;
res.setHeader('Location','/');
return res.end();
}
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><tittle>My First Page</tittle></head>');
res.write('<body><h>Hello from my node.js server....</h></body>');
res.write('</html>');
res.end();

});
server.listen(3000);
const fs = require('fs');

const HandlerRequest = (req,res)=>{

    const url = req.url;
    const Method = req.method();

    if(URL === '/'){
    
        res.write('<html>');
        res.write('<head><tittle>Enter Message</tittle></head>');
        res.write('<body><form action="/message" method="POST"><input type ="text" name="message"> <button type="submit">Send</button> </form></body>');
        res.write('</html>');
       return res.end();
        
    } 
    
    if(URL === '/message' && Method === "POST"){
        const body = [];
        req.on("data",(chunk)=>{
    console.log(chunk);
    body.push(chunk);
        })
    
      return  req.on("end",()=>{
    const parsedBody = Buffer.concat(body).toString();
    // Console.log(parsedBody);
    const message = parsedBody.split('=')[1]; 
    fs.writeFile('message.txt',message,err =>{
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    });
        });
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><tittle>My First Page</tittle></head>');
    res.write('<body><h>Hello from my node.js server....</h></body>');
    res.write('</html>');
    res.end();
}

//module.exports = HandlerRequest;

// module.exports = {
//     handler: HandlerRequest,
//     smmeText: 'hard coded text......'
// }

// module.exports.handler = HandlerRequest;
// module.exports.sometext = 'hard coded text......';

exports.handler = HandlerRequest;
exports.sometext = 'hard coded text......';

// This is how modules Works & Import & Export Works...........


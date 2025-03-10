
const express = require('express');
 const app =  express()

//  app.use((req,res,next)=>{
//     console.log('In the middleware')
//     next();    
// });

app.use((req,res,next)=>{
    console.log("They always run.......");
    next();
});

app.use('/add-product',(req,res,next)=>{
    console.log('In the anrsother middleware')   
    res.send('<h1>The add page product</h1>') 
});


app.use('/',(req,res,next)=>{
    console.log('In the anrsother middleware')   
    res.send('<h1>Hello from express js</h1>') 
});

app.listen(3000);

//  const server = http.createServer(app);
// server.listen(3000);

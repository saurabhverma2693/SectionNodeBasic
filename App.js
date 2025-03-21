
const express = require('express');


const bodyParser = require('body-parser');
 const app =  express()

 const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


//  app.use((req,res,next)=>{
//     console.log('In the middleware')
//     next();    
// });

// app.use((req,res,next)=>{
//     console.log("They always run.......");...........................................
//     next();
// });

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes);

app.use(shopRoutes);



// app.use('/',(req,res,next)=>{
//     console.log('In the anrsother middleware')   
//     res.send('<h1>Hello from express js</h1>') 
// });

const PORT = process.env.PORT || 4000;


app.listen(PORT,()=>{
    console.log("server running on port" + PORT);
});

//  const server = http.createServer(app);
// server.listen(3000);

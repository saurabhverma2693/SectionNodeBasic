
const express = require('express');

const bodyParser = require('body-parser');
 const app =  express()

//  app.use((req,res,next)=>{
//     console.log('In the middleware')
//     next();    
// });

app.use((req,res,next)=>{
    console.log("They always run.......");
    next();
});

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
      console.log("In another middleware");
    res.send('<form acttion="/product" method="POST"> <input type="text" name="title"> <button type="Submit">Add Product</button> </form>'); 
});

app.use('/product',(req,res,next)=>{
    console.log(req.body)   
    res.redirect('/'); 
});

app.use('/',(req,res,next)=>{
    console.log('in another middleware')   
    res.send('<h1>Heelo from Express</h1>'); 
});

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

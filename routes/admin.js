const express = require('express');

const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    console.log("In another middleware");
  res.send('<form acttion="/product" method="POST"> <input type="text" name="title"> <button type="Submit">Add Product</button> </form>'); 
});

router.post('/product',(req,res,next)=>{
  console.log(req.body)   
  res.redirect('/'); 
});

module.exports = router;

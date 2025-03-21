const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/admin/add-product',(req,res,next)=>{
    console.log("In another middleware");
  res.sendFile(path.join(__dirname,'../','Views','addproduct.html'));
});

router.post('/add-product',(req,res,next)=>{
  console.log(req.body)   
  res.redirect('/'); 
});

module.exports = router;

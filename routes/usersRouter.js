const express = require('express');
const userModel = require('../models/user-model');
const router = express.Router();

router.get('/',(req,res)=>{
  res.send('hey');
})

router.post('/register',async(req,res)=>{
  try{
    let {email, fullname , password} = req.body;
    let user = await userModel.create({
      email,
      fullname,
      password
    })
    res.send(user);
  } catch (err){
    res.send(err.message);
  }

})

module.exports = router;
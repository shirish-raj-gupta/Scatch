const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const{
  resgiterUser, 
  loginUser,
  logoutUser,
} = require('../controllers/authController')


router.get('/',(req,res)=>{
  res.send('hey');
})

router.post('/register', resgiterUser)

router.post('/login', loginUser);

router.get('/logout', logoutUser);

module.exports = router;
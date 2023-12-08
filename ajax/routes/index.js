var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.nombre === null || req.session.nombre === undefined){
    console.log('Estoy en index y redirijo a ' + __dirname+'\\..\\public\\login.html');
    res.redirect('/login.html');
  } else{
    res.redirect('/user')
  }
});

module.exports = router;

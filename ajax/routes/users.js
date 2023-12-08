var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  if(req.session.nombre === null || req.session.nombre === undefined){

    /* Simulación
    Llamada a la base de datos para obtener el usuario y la contraseña (cifrada)
    */

    /* Simulación
    Ciframos la contraseña de req.body.contrasena
    */

    /* Simulación
    Si el usuario no existe le añadimos a la base de datos
    */

    if(req.body.contrasena === "Abrete01"){
      req.session.nombre = req.body.nombre;
    } else{
      res.redirect("/")
    }
    
  }
  if(req.session.nombre != null && req.session.nombre != undefined){
    req.body.nombre = req.session.nombre;
  }
  console.log("estoy en users");
  res.render('user', {title: req.body.nombre});
});

router.get('/', function(req, res, next) {
  if(req.session.nombre === null || req.session.nombre === undefined){
    res.redirect("/");
    
  } else{
    console.log("estoy en users 2");
    res.render('user', {title: req.session.nombre});
  }
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/datos', function(req, res, next) {
    var agenda = [
        { nombre: "Juan", telefono: "89731982" },
        { nombre: "Carmen", telefono: "28329828" },
        { nombre: "David", telefono: "827272728" }
        ];
    res.json({Agenda: agenda})
});

router.get('/cerrarsesion', function(req, res, next) {
    req.session.destroy(err => {
        var vok = true;
        if (err) {
          vok = false
        }
        res.json({ok: vok});
      });
});

module.exports = router;

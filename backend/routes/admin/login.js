var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

/* GET login page. */
router.get('/', function (req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

router.get('/logout', function (req,res,next) {
  req.session.destroy(); // destruir las variables de sesion (id y usuario)
  res.render('admin/login', {
    layout:'admin/layout'
  })
});



router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario; //capturando la info
    var password = req.body.password; // captura la contra

    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }

}
)



module.exports = router;
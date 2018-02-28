var express = require('express');
var router = express.Router();
var multer  = require('multer');
var imager = require('multer-imager');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './bin/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ ".jpg")
    }
  });
  
var upload = multer({ storage: storage })

var objekatKontroler = require('../controllers/objekatController.js');

router.get('/',  objekatKontroler.vratiSveObjekte);

router.get('/:id',  objekatKontroler.vratiObjekatPoIdu);

router.get('/korisnik/:id',  objekatKontroler.vratiObjekatPoKorisniku);

router.post('/', upload.single('slikaLokala'), objekatKontroler.dodajNoviObjekat);

router.delete('/:id', objekatKontroler.obrisiObjekat);

module.exports = router;



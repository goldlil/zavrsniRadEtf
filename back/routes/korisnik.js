var express = require('express');
var router = express.Router();
var korisnikKontroler = require('../controllers/korisnikKontroler.js');

router.post('/registracija', korisnikKontroler.registrujNovogKorisnika);

router.get('/registracija', korisnikKontroler.vratiSveKorisnike);

router.get('/dalipostoji', korisnikKontroler.daLiPostojiKorisnik);
module.exports = router;
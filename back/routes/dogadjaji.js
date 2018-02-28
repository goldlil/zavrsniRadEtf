var express = require('express');
var router = express.Router();
var dogadjajController = require('../controllers/dogadjajController');

router.get('/', dogadjajController.vratiSveDogadjaje);

router.post('/dodaj', dogadjajController.dodajDogadjaj);

//router.post()

module.exports = router;
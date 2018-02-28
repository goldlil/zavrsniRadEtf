var express = require('express');
var router = express.Router();
var rezervacijaController = require('../controllers/rezervacijaController.js');

router.post('/dodaj', rezervacijaController.dodajRezervaciju);

router.get("/:id", rezervacijaController.dajRezervacijePoIduKorisnika);

router.get('/predstavnik/:id', rezervacijaController.dajRezervacijePoIduPredstavnika);

router.get("/update/:id", rezervacijaController.updateRezervaciju);


module.exports = router;

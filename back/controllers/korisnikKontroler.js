var baza = require('../bazaPodataka.js');
var korisnik = baza.korisnik;

module.exports.registrujNovogKorisnika = function(req, res)
{
    const instancaKorisnika = korisnik.build({
        korisnickoIme: req.body.korisnickoIme,
        email: req.body.email,
        sifra: req.body.sifra,
        ime: req.body.ime,
        prezime: req.body.prezime,
        predstavnikObjekta: req.body.predstavnikObjekta
    });

    instancaKorisnika.save()
    .then(() => {
        console.log("saljem");
        res.send("1");
    })
    .catch(error => {
        console.log(error);
        res.send("0");
    });

    
}

module.exports.vratiSveKorisnike = function (req, res)
{
    /*korisnik.findAll().then(korisnik => {
        res.send(JSON.stringify(korisnik));
    });*/
    res.send("radi");
    console.log("usaooo-i");
};

module.exports.daLiPostojiKorisnik = function(req, res){
    console.log(req.query);
    
    korisnik.findAll({
        where: {
            korisnickoIme: req.query.korisnickoIme,
            sifra: req.query.sifra
        }
    })
    .then(odgovor =>{
       res.send(JSON.stringify(odgovor));
    })
    .error(error => {
        console.log(error);
        res.send("0");
    });
}


var baza = require('../bazaPodataka.js');
var objekat = baza.objekat;
var korisnik = baza.korisnik;
var predstavnik_objekt = baza.predstavnik_objekt;
//var easyimg = require('easyimage');


module.exports.vratiSveObjekte = function (req, res)
{
    objekat.findAll().then(objekti => {
        res.send(JSON.stringify(objekti));
    });
};

module.exports.obrisiObjekat = function(req, res)
{
    console.log(req.params);
    objekat.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(odgovor => {
        console.log(odgovor)
        res.send("true");
    })
    .catch(error => {
        console.log(error);
        Response.send("false");
    });
}

module.exports.vratiObjekatPoIdu = function(req, res)
{
    objekat.findAll({
        where: {
          id: req.params.id
        }
    })
    .then(jedanObjekat => {
        res.send(JSON.stringify(jedanObjekat))
    })
    .catch(error => {
        console.log(error);
    });
}

module.exports.dodajNoviObjekat = function(req, res)
{   
    console.log(req.body.idPredstavnika);
    
    const instancaObjekta = objekat.build({
        nazivObjekta: req.body.nazivObjekta,
        adresa: req.body.adresa,
        kategorija: req.body.odabranaKategorija,
        kratakOpis: req.body.kratakOpis,
        slika: req.file.filename,
        korisnikId: req.body.idPredstavnika
    });


    instancaObjekta.save()
    .then(odgovor => {
        res.send("1");
         
    })
    .catch(error => {
        console.log(error);
        res.send("0");
    })


}

module.exports.promjeniObjekat = function(req, res)
{

}

module.exports.vratiObjekatPoKorisniku = function(req, res){
    objekat.findAll({
        where: {
            korisnikId: req.params.id
        }
    }).then(objekti => {
        res.send(JSON.stringify(objekti));
    });
}
var baza = require('../bazaPodataka.js');
var objekat = baza.objekat;
var dogadjaj = baza.dogadjaj;

module.exports.dodajDogadjaj = function (req, res){
    console.log(req.body);
    objekat.findAll({
        where:{
            id: req.body.objekat
        }
    })
    .then(response => {
        if(response.lenth == 0) 
        {   
            res.send("0");
            return;
        }
        var lokacijaSlike = response[0].dataValues.slika;
        var lokacija = response[0].dataValues.nazivObjekta;
        const instancaDogadjaja = dogadjaj.build(
            {
                naziv: req.body.nazivDogadjaja,
                datum: req.body.datum,
                vrijeme: req.body.vrijeme,
                kratakOpis:req.body.kratakOpis,
                slika: lokacijaSlike,
                moguca_rezervacija: req.body.mogucaRezervacija,
                objekatId: req.body.objekat,
                lokacija: lokacija
            })

        instancaDogadjaja.save()
        .then(() => {
            console.log("uspjesno dodao dogadjaj");
            res.send("1");
        })
        .catch(error => {
            console.log(error);
            res.send("0")
        })
        
    })
    .catch(error => {
        res.send("0");
    });
}

module.exports.vratiSveDogadjaje = function(req, res){
    dogadjaj.findAll().then(dogadjaj => {
        res.send(JSON.stringify(dogadjaj));
    });
}
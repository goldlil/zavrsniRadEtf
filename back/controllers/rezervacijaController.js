var baza = require('../bazaPodataka.js');
var objekat = baza.objekat;
var rezervacija = baza.rezervacija;
var dogadjaj = baza.dogadjaj;
var korisnik = baza.korisnik;

module.exports.dodajRezervaciju = function (req, res){

    const instancaRezervacije = rezervacija.build({
        potvrdjena: req.body.potvrdjena,
        korisnikId: req.body.korisnikId,
        objekatId: req.body.objekatId,
        dogadjajId: req.body.dogadjajId 
    })

    instancaRezervacije.save()
    .then(() => {
        res.send("1");
    })
    .catch(error => {
        res.send("0");
    });

}

module.exports.dajRezervacijePoIduKorisnika = function (req, res){

    var nizDogadjaja = [];
    var povratniNiz = [];

    dogadjaj.findAll({raw : true})
    .then(odgovor => {
        nizDogadjaja = odgovor;
        
        rezervacija.findAll({
            where : {
                korisnikId: req.params.id
            },
            raw: true
        })
        .then(odgovorRezervacija =>{
            console.log(odgovorRezervacija);
            for(var i = 0; i < odgovorRezervacija.length; i++)
            {
                var dogadjajId = odgovorRezervacija[i].dogadjajId;
                var potvrdjena = odgovorRezervacija[i].potvrdjena;
                var dogadjaj = nizDogadjaja.find(instancaDogadjaja => {
                   return instancaDogadjaja.id == dogadjajId;
                })

                povratniNiz.push({
                    potvrdjena: potvrdjena ? "jeste" : "nije",
                    lokacija: dogadjaj.lokacija,
                    dogadjaj: dogadjaj.naziv,
                    dogadjajId: dogadjaj.id
                })

            }
            console.log(povratniNiz);
            res.send(povratniNiz);

        })

    })
    .catch(error => {
        res.send(error);
    })

}

module.exports.dajRezervacijePoIduPredstavnika = function(req, res) {
    var listaObjekata = [];
    var listaDogadjaja = [];
    var povratniNiz = [];
    objekat.findAll({
        where:{
            korisnikId: req.params.id
        },
        raw : true
    })
    .then(sviObjekti => {
        sviObjekti.forEach( element => {
            listaObjekata.push(element.id);
        });
        dogadjaj.findAll({raw : true})
        .then(sviDogadjaji => {
            listaDogadjaja = sviDogadjaji;

            rezervacija.findAll({
                where: {
                    objekatId : listaObjekata
                },
                raw : true
            })
            .then(listaRezervacija => {
               
                for(var i = 0; i < listaRezervacija.length; i++)
                {
                    var dogadjajId = listaRezervacija[i].dogadjajId;
                    var id = listaRezervacija[i].id;
                    potvrdjena = listaRezervacija[i].potvrdjena;
                    var dogadjaj = listaDogadjaja.find(instancaDogadjaja => {
                       return instancaDogadjaja.id == dogadjajId;
                    })
    
                    povratniNiz.push({
                        id: id,
                        lokacija: dogadjaj.lokacija,
                        dogadjaj: dogadjaj.naziv,
                        potvrdjena: potvrdjena
                    })
                }

                    res.send(JSON.stringify(povratniNiz));
            })
            .catch(error => {
                console.log(error);
            })
        })
        .catch(error => {
            console.log(error);
        })




    })
    .catch(error => {
        console.log(error);
    })
}

module.exports.updateRezervaciju = function(req, res){
   
    rezervacija.update(
        {
            potvrdjena: true
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(() => {
        res.send("1");
    })
    .catch(error => {
        console.log("error");
    })
}

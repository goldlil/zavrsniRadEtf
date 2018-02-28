module.exports = function(sequelize, Sequelize)
{
    //kreiranje tabela
    var objekat = require('./models/objekat.js')(sequelize, Sequelize);
    var dogadjaj = require('./models/dogadjaj.js')(sequelize, Sequelize);
    var korisnik = require('./models/korisnik.js')(sequelize, Sequelize);
    var recenzija = require('./models/recenzija.js')(sequelize, Sequelize);
    var rezervacija = require('./models/rezervacija.js')(sequelize, Sequelize);
    var admin = require('./models/admin.js')(sequelize, Sequelize);
  // var predstavnik_objekt = require('./models/predstavnik_objekat.js')(sequelize, Sequelize);
    
    
    //definiranje relacija
    objekat.hasMany(dogadjaj, {as: 'Dogadjaji'});
    korisnik.hasMany(recenzija, {as: 'KorisnikRecenzije'});
    objekat.hasMany(recenzija, {as: 'ObjekatRecenzije'});
    korisnik.hasMany(rezervacija, {as: 'KorisnikRezervacija'});
    objekat.hasMany(rezervacija, {as: 'ObjekatRezervacija'});
    dogadjaj.hasMany(rezervacija, {as: 'DogadjajRezervacija'});
    korisnik.hasMany(objekat, {as: 'predstavnik'});
    

    

    //sequelize.sync({force: true});
    sequelize.sync();
    var modeli = {};
    modeli.objekat = objekat;
    modeli.dogadjaj = dogadjaj;
    modeli.korisnik = korisnik;
    modeli.recenzija = recenzija;
    modeli.rezervacija = rezervacija;
    modeli.admin = admin;
    //modeli.predstavnik_objekt = predstavnik_objekt;
    
    return modeli;
    
}


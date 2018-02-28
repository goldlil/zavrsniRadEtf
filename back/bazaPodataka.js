var Sequelize = require('sequelize');

const sequelize = new Sequelize('sarajevonocutest', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Uspjesno konektovan na bazu.');
    })
    .catch(err => {
        console.error('Desila se greska pri konekciji na bazu: ', err);
    });


    const listaKorisnika = sequelize.define('listaKorisnika', {
        ime: Sequelize.STRING,
        prezime: Sequelize.STRING,
        verificiran: Sequelize.BOOLEAN
      });

    listaKorisnika.sync();
      

module.exports = require('./kreiranjeTabelaIRelacija.js')(sequelize, Sequelize);

        
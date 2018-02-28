module.exports = function(sequelize, DataTypes){
    return sequelize.define('korisnik', {
        korisnickoIme: {type: DataTypes.STRING(45), allowNull: false, unique: true},
        email: { type: DataTypes.STRING(45), allowNull: false },
        sifra: { type: DataTypes.STRING(45), allowNull: false },
        ime: { type: DataTypes.STRING(255), allowNull: false},
        prezime: {type: DataTypes.STRING(150), allowNull: false},
        predstavnikObjekta: {type: DataTypes.BOOLEAN, allowNull: false}
        },
        {
            freezeTableName: true,
            timestamps: false
        })
    };
module.exports = function(sequelize, DataTypes){
    return sequelize.define('objekat', {
        nazivObjekta: {type: DataTypes.STRING(45), allowNull: false},
        adresa: { type: DataTypes.STRING(45), allowNull: false },
        kategorija: { type: DataTypes.STRING(45), allowNull: false },
        kratakOpis: { type: DataTypes.STRING(255), allowNull: false},
        slika: {type: DataTypes.STRING(150), allowNull: false},
        },
        {
            freezeTableName: true,
            timestamps: false
        })
    };
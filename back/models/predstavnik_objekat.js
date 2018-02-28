module.exports = function(sequelize, DataTypes){
    return sequelize.define('predstavnik_objekat', {
        korisnikId: {type: DataTypes.INTEGER, allowNull: false},
        objekatId: {type: DataTypes.INTEGER, allowNull: false}
        },
        {
            freezeTableName: true,
            timestamps: false
        })
    };
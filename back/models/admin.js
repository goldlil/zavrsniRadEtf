module.exports = function(sequelize, DataTypes){
    return sequelize.define('admin', {
        korisnickoIme: {type: DataTypes.STRING(45), allowNull: false},
        sifra: { type: DataTypes.STRING(45), allowNull: false },
        },
        {
            freezeTableName: true,
            timestamps: false
        })
    };
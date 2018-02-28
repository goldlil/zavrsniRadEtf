module.exports = function(sequelize, DataTypes){
    return sequelize.define('recenzija', {
        ocjena: {type: DataTypes.INTEGER, allowNull: false},
        kratakOpis: { type: DataTypes.STRING(45), allowNull: false }
        },
        {
            freezeTableName: true,
            timestamps: false
        })
    };
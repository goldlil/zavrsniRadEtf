module.exports = function(sequelize, DataTypes){
    return sequelize.define('rezervacija', {
        potvrdjena: {type: DataTypes.BOOLEAN, allowNull: false},
        },
        {
            freezeTableName: true,
            timestamps: false
        })
    };
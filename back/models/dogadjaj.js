module.exports = function(sequelize, DataTypes){
    return sequelize.define('dogadjaj', {
            naziv: {
                type: DataTypes.STRING(45), 
                allowNull: false
            },
            datum: { 
                type: DataTypes.DATEONLY, 
                allowNull: false 
            },
            vrijeme: { 
                type: DataTypes.TIME, 
                allowNull: false 
            },
            kratakOpis: { 
                type: DataTypes.STRING(255), 
                allowNull: false
            },
            slika: {
                type: DataTypes.STRING(150), 
                allowNull: false
            },
            moguca_rezervacija: {
                type: DataTypes.BOOLEAN, 
                allowNull: false
            },
            lokacija: {
                type: DataTypes.STRING(50),
                allowNull: false
            }
        },
        {
            freezeTableName: true,
            timestamps: false
        })
    };
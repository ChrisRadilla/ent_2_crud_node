const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // capitalize and singular     // singular and not cap.
const User = sequelize.define('user', {
    // define the columns here
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
   
});

module.exports = User;
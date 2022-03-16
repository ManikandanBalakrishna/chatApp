const _ = require('lodash');
const Sequalize = require('sequelize');
const sequelize = require('./../config/database');


const user = sequelize.define('user_details', {
    user_id: {
        type: Sequalize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    full_name:{
        type: Sequalize.STRING,
        allowNull: true
    },
    mobile_no: {
        type: Sequalize.STRING,
        allowNull: true,
    },
    email_id:{
        type: Sequalize.STRING,
        allowNull: true
    },

    user_status:{
        type: Sequalize.BOOLEAN,
        allowNull: true
    }

});

module.exports = user;
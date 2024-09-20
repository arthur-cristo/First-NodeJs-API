require('dotenv').config();

const {Sequelize} = require("sequelize");

const URL = process.env.DB_URL;

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
    },
);

const connection = async () => {
    await sequelize.authenticate();
};

connection()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.log('Unable to connect to the database:', err));

module.exports = sequelize;
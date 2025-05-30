import Sequelize from 'sequelize';

const db = new Sequelize('agenciaviajes', 'Javier', 'Jey123456789', {
    host: 'mysqldatabase.mysql.database.azure.com',
    port: '3306',
    dialect: 'mysql',
     dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // Azure MySQL requiere SSL
        }
    },
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;
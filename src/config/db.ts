import { Dialect, Sequelize } from 'sequelize';
import config from './config';

const env = process.env.NODE_ENV || 'development';

export default class Database {

    database: Sequelize;

    constructor() {
        this.database = new Sequelize(
            config[env].database,
            config[env].user,
            config[env].password,
            {
                host: config[env].host,
                dialect: config.dbDialect as Dialect,
                dialectOptions: {
                    encrypt: true
                },
                port: Number(config.dbPort),
                logging: false,
                pool: {
                    max: Number(config.maxPool),
                    min: Number(config.minPool),
                    acquire: 30000,
                    idle: 10000
                }
            })

        this.database.authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });

        this.database.sync({
            // Using 'force' will drop any table defined in the models and create them again.
            // force: true
        })
    }
}
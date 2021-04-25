import dotenv from 'dotenv';

dotenv.config();

const config = {
  maxPool: process.env.MAX_POOL || 10,
  minPool: process.env.MIN_POOL || 1,
  dbPort: process.env.DB_PORT || 3306,
  dbDialect: process.env.DB_DIALECT || 'mysql',
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST
  }
}

export default config;
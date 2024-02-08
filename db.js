/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client({
    user: 'postgres',
    password: require('./passkey'),
    host: 'localhost',
    port: 5432,
    database: 'lunchly'
  });
db.connect();

module.exports = db;

const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'WorkFinder',
    password: 'play2233',
    port: 5432,
})

module.exports = pool
const mysql = require("mysql2/promise")

const con = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'productos',
    password : ''
})

module.exports = con;
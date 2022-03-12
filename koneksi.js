var mysql = require("mysql");

// koneksi database
const conn = mysql.createConnection({
    host: "localhost",
    port: "8889",
    user: "root",
    password: "root",
    database: "dbrestapi",
});

conn.connect((err) => {
    if (err) throw err;
    console.log("Mysql terkoneksi");
});

module.exports = conn;

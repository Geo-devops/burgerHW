var mysql = require("mysql");
require('dotenv').config();

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);

}else{
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: process.env.SQL_PASSWORD,
        database: "burger_db"
    });
};

connection.connect(function(err) {
    if(err) {
        return;
    }
});

module.exports = connection;

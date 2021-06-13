require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "sxs",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "DROP TABLE if exists responses; CREATE TABLE responses(id INT NOT NULL AUTO_INCREMENT, mood VARCHAR(255) not null, format VARCHAR(255) not null, url VARCHAR(500) not null, PRIMARY KEY (id));";
    //"DROP TABLE if exists students; CREATE TABLE students(id INT NOT NULL AUTO_INCREMENT, firstname VARCHAR(40) not null, lastname VARCHAR(40) not null, PRIMARY KEY (id));";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `responses` was successful!");

    console.log("Closing...");
  });

  con.end();
});

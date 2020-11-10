require('dotenv').config();
const mysql = require('mysql');

//database connection
var con = mysql.createConnection({
  host : process.env.DB_HOST,
  user : process.env.DB_USER,
  database : process.env.DB_NAME,
  password : process.env.DB_PWD
});

//error checking
try {
  con.connect((err) => {
    if (err) console.log(err);
    console.log("mysql Connected!");
}); 
} catch (error) {
  throw error;
}
module.exports = con;  
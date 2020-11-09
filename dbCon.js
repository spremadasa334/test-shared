const mysql = require('mysql');
require('dotenv').config();

//database connection
var con = mysql.createConnection({
  host : process.env.HOST,
  user : process.env.USER,
  database : process.env.DB,
  password : process.env.PWD,
  
});

//error checking
try {
  con.connect((err) => {
    if (err) console.log(err);;
    console.log("mysql Connected!");
}); 
} catch (error) {
  throw error;
}

module.exports = con;  
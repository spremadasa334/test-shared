require('dotenv').config();
const mysql = require('mysql');


//database connection
var con = mysql.createConnection({
  host : sql12.freesqldatabase.com,
  user : sql12375494,
  database : sql12375494,
  password : Tu6m9gdmTt
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
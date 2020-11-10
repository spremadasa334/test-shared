require('dotenv').config();
const mysql = require('mysql');


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
    console.log(process.env.HOST);
    console.log(process.env.USER);
    console.log(process.env.DB);
    console.log(process.env.PWD);
    console.log("mysql Connected!");
}); 
} catch (error) {
  throw error;
}

module.exports = con;  
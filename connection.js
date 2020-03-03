// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "test_bastian"
// });

// con.connect(function (err){
//     if(err) throw err;
// });

// module.exports = con;

const mysql = require('mysql2');
const con = mysql.createPool({
    host     : 'localhost', // MYSQL HOST NAME
    user     : 'root',        // MYSQL USERNAME
    password : '',    // MYSQL PASSWORD
    database : 'task_bastian'      // MYSQL DB NAME
}).promise();
module.exports = con;
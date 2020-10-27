const mysql = require("mysql");

function connection(){
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  // Your password
  password: "Mishi*20",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  //connection.end();
});
}
module.exports = connection;
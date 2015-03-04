var oracledb = require('oracledb');
var dbConfig = require('/public/dbconfig.js');
var express = require('express');

var bodyParser = require("body-parser");
var applications = require('./public/services.js');


var app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

applications(app, oracledb);

oracledb.createPool ({
	user : dbConfig.user,
	password : dbConfig.password,
	connectString : dbConfig.connectString,
	poolMax : 44,
	poolMin : 2,
	poolIncrement : 5,
	poolTimeout : 4
}, 
function (err, pool) {
	if (err) {
		console.error('createPool() callback: ' + err.message);
		return;
	}

	
})

// oracledb.getConnection(
//   {
//     user          : "xlin",
//     password      : "Smarter1",
//     connectString : "localhost:8080/"
//   },
//   function(err, connection)
//   {
//     if (err) {
//       console.error(err.message);
//       return;
//     }
//     connection.execute(
//       "SELECT department_id, department_name "
//     + "FROM departments "
//     + "WHERE department_id = :did",
//       [180],
//       function(err, result)
//       {
//         if (err) {
//           console.error(err.message);
//           return;
//         }
//         console.log(result.rows);
//       });
//   });

var host = "127.0.0.1";
var port = 3000;

var server =  app.listen(port, host);
var oracledb = require('oracledb');

var express = require('express');

var app = express();



app.get('/', function (req, res) {
	
	res.send('Hello World');
});

app.get('/getConnection', function(req, res){
	req.body
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



var server =  app.listen(3000, 'localhost',function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Start listening at %s on port %s", host, port);
})
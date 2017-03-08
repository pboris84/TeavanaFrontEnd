var express = require('express');
var app = express();
 
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }));

var myOutput = 'UUUUURRR';

/*MSSQL driver
var sql = require('mssql');
 
sql.connect("mssql://INFO445:GoHuskies!@IS-HAY04.ischool.uw.edu/TEAVANA").then(function() {
    // Query 
    
    new sql.Request().query('select * from CITY').then(function(recordset) {
        myOutput = JSON.stringify(recordset);
        console.dir(recordset);
  
    }).catch(function(err) {
        // ... query error checks 
    });
/* Stored Proc
            
            new sql.Request()
            .input('input_parameter', sql.Int, value)
            .output('output_parameter', sql.VarChar(50))
            .execute('procedure_name').then(function(recordsets) {
                console.dir(recordsets);
            }).catch(function(err) {
                // ... execute error checks 
            });
 */           
    
/* WHere clause   
    // ES6 Tagged template literals (experimental) 
    
    sql.query`select * from mytable where id = ${value}`.then(function(recordset) {
        console.dir(recordset);
    }).catch(function(err) {
        // ... query error checks 
    });

}).catch(function(err) {
    // ... connect error checks 
});


*/




//get
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
//post
app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!' + myOutput);
});



app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});


var server = app.listen(5000, function () {
    console.log('Node server is running..');
});

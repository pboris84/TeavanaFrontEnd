var sql = require("node_modules/seriate");

// Change the config settings to match your 
// SQL Server and database
var config = {  
    "server": "IS-HAY04.ischool.uw.edu", //"172.28.102.110",//
    "user": "INFO445",
    "password": "GoHuskies!",
    "database": "TEAVANA"
};

sql.setDefaultConfig(config);

/*
sql.execute( {  
        query: "SELECT * FROM [ORDER]"
    } ).then( function( results ) {
        console.log( results );
    }, function( err ) {
        console.log( "Something bad happened:", err );
    } );
*/
/*
var num = 4;  
sql.execute( {  
        query: "SELECT * FROM [STORE] WHERE  StoreID < @theID",
        params: {
            theID: {
                type: sql.INT,
                val: num,
            }
        }
    } ).then( function( results ) {
        console.log( results );
    }, function( err ) {
        console.log( "Something bad happened:", err );
    } );
*/

var store = "Hub";
var city = "Tea City";

sql.execute( {
        query: "SELECT * FROM CITY"     
    } ).then( function( results ) {
        console.log( results );
    }, function( err ) {
        console.log( "Something bad happened!!!!:", err );
    } );


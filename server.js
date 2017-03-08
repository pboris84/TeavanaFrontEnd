'use strict'

var sql = require('mssql')
var express = require('express')
var cors = require('cors')
var path = require('path')
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/static/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function connectToDb() {
  var config = {
    user: 'YOUR USER',
    password: 'YOUR PASSWORD',
    server: 'YOUR SERVER',
    database: 'YOUR DB'
  }
  return sql.connect(config)
}

function displayAllStores() {
  return new sql.Request().query('SELECT * FROM dbo.[STORE] ORDER BY StoreID DESC');
}

function createStore(StoreName, CityName) {
  return new sql.Request()
    .input('StoreName', sql.VarChar(30), StoreName)
    .input('CityName', sql.VarChar(30), CityName)
    .execute('dbo.addStore')
}

//ROUTES
function makeRouter() {
  app.use(cors())

  // frames
  app.get('/', function (req, res) {
    res.sendFile('/static/views/index.html', { root: __dirname })
  })

  app.get('/Stores/all', function (req, res) {
    displayAllStores().then(function (data) {
      return res.json(data);
    });
  })

  app.post('/createStore', function (req, res) {
    connectToDb().then(function () {
      var StoreName = req.body.StoreName;
      var CityName = req.body.CityName;

      createStore(StoreName, CityName).then(function () {
        res.redirect('/')
      }).catch(function (err) {
        console.log(err);
      });
    });
  })
}

function startAll() {
  connectToDb().then(() => {
    makeRouter();
    app.listen(process.env.PORT || 3000);
  })
}

startAll()

var express = require('express');
var bodyparser = require('body-parser');

var connection = require('./Dbconnection');
var routesStudent = require('./Routes/RouteSV');
var routesSign = require('./Routes/RouteSign');
var routesLogin = require('./Routes/RouteLogin');
var routesPoint = require('./Routes/RoutePoint');
var routesSubject = require('./Routes/RouteSub');
var app = express();
app.use(bodyparser.urlencoded({extended: true})); //support x-www-form-urlencoded
app.use(bodyparser.json());
 
app.use('/sinhvien',routesStudent);
app.use('/dangky',routesSign);
app.use('/dangnhap',routesLogin);
app.use('/diem',routesPoint);
app.use('/monhoc',routesSubject);

var server = app.listen(4000, function() {
  console.log('Server listening on port ' + server.address().port);
});

module.exports = app;
var mysql=require('mysql');
var connection=mysql.createPool({
 
host:'localhost',
 user:'root',
 password:'',
 database:'qlsinhvien'
 
});
module.exports=connection;
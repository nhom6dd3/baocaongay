var express = require('express');
var router = express.Router();
var db = require('../Dbconnection');


router.post('/dangnhap', function(req, res, next) {
    var login = {
           username : req.body.Username,
           password : req.body.Password,
    };
    db.query(" select * from user where username = ? AND password = ? ",[login.username, login.password],function(err,row,field)
    {
        if(err)
        {
            console.log(err);
            res.send({'success': false ,'message':'Lỗi phần mềm !'})
        }
        if(row == 0)
        {
            res.send({'success': false ,'message':'Tài khoản không tồn tại !'})
        }
        else{
            res.send({'success': true ,'message':'Đăng nhập thành công !'})
        }
    });
});
module.exports = router;

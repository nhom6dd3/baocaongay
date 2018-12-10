var express = require('express');
var router = express.Router();
var db = require('../Dbconnection');

router.post('/dangky', function(req, res, next) {
    var signin = {
           username : req.body.User,
           password : req.body.Pass,
           chucvu : req.body.Role,
    };
    db.query(" select masinhvien from sinhvien where ? = masinhvien",[signin.username],function(err,row,field)
    {
        if(err)
        {
            console.log(err);
            res.send({'success': false ,'message':'Lỗi phần mềm !'})
        }
        if(row == 0)
        {
            res.send({'success': false ,'message':'Người dùng không tồn tại trong tổ chức!'})
        }
        else{
            db.query("select username from user where ? = username",[signin.username],function(err,row,field)
            {
                if(err)
                {
                    console.log(err);
                    res.send({'success': false ,'message':'Lỗi phần mềm !'})
                }
                if(row == 0) {
                    db.query("Insert into user(username,password,chucvu) values(?,?,?)",[signin.username,signin.password,signin.chucvu],function(err,row,field)
                    {
                        if(err)
                        {
                            console.log(err);
                            res.send({'success': false ,'message':'Không đăng ký được !'})
                        }
                        else {
                            res.send({'success': true ,'message':'Đăng ký thành công !'})
                        }
                    });
                }
                else
                {
                    res.send({'success': false ,'message':'Tài khoản này đã đăng ký!'})
                }
            });
            
            
        }
    });

    
});
module.exports = router;

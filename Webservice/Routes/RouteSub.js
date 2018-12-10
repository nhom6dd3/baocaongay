var express = require('express');
var router = express.Router();
var db = require('../Dbconnection');

router.get('/getmamon',function(req,res,next){
    db.query("Select * from monhoc",function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
});

router.get('/viewmh', function(req, res, next)
{
    db.query("select * from monhoc ",function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
});

router.post('/addmh', function(req, res, next) {
    var monhoc = {
           mamon : req.body.Mamon,
           tenmon : req.body.Tenmon,
    };
    db.query("select mamon from monhoc where ? = mamon",[monhoc.mamon],function(err,row,field)
    {
        if(err)
        {
            console.log(err);
            res.send({'success': false ,'message':'Lỗi phần mềm !'})
        }
        if(row == 0) {
            db.query("Insert into monhoc(mamon,tenmon) values(?,?)",[monhoc.mamon,monhoc.tenmon],function(err,row,field)
            {
                if(err)
                {
                    console.log(err);
                    res.send({'success': false ,'message':' Lỗi phần mềm !'})
                }
                else {
                    res.send({'success': true ,'message':' Thêm môn học thành công !'})
                }
            });
        }
        else
        {
            res.send({'success': false ,'message':'Môn học này đã đăng ký!'})
        }
    });          

            
});
module.exports = router;

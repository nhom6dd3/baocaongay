var express = require('express');
var router = express.Router();
var db = require('../Dbconnection');
var SinhVien = require('./SinhVien');



router.get('/:id?',function(req,res,next){
    if(req.params.id){
        SinhVien.getSinhVienById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
        SinhVien.getAllSinhVien2(function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});


router.post('/addsv', function(req, res, next) {
    var sinhvien = {
           hoten : req.body.Hoten,
           masinhvien : req.body.Masinhvien,
           ngaysinh : req.body.Ngaysinh,
           gioitinh : req.body.Gioitinh,
           diachi : req.body.Diachi,
           khoa : req.body.Khoa,
           lop : req.body.Lop,
           khoahoc : req.body.Khoahoc,
    };
    

    db.query("select masinhvien from sinhvien where ? = masinhvien",[sinhvien.masinhvien],function(err,row,field)
    {
        if(err)
        {
            console.log(err);
            res.send({'success': false ,'message':'Lỗi phần mềm !'})
        }
        if(row == 0) {
            db.query("Insert into sinhvien(hoten,masinhvien,ngaysinh,gioitinh,diachi,khoa,lop,khoahoc) values(?,?,?,?,?,?,?,?)",[sinhvien.hoten,sinhvien.masinhvien,sinhvien.ngaysinh,sinhvien.gioitinh,sinhvien.diachi,sinhvien.khoa,sinhvien.lop,sinhvien.khoahoc],function(err,row,field)
            {
                if(err)
                {
                    console.log(err);
                    res.send({'success': false ,'message':' Lỗi phần mềm !'})
                }
                else {
                    res.send({'success': true ,'message':' Thêm sinh viên mới thành công !'})
                }
            });
        }
        else
        {
            res.send({'success': false ,'message':'Sinh viên đã đăng ký!'})
        }
    });   
});
module.exports = router;
// getAllSinhVien:function(callback){
//     return db.query("Select * from sinhvien",callback);
// },
// getSinhVienById:function(id,callback){
//     return db.query("select * from sinhvien where masinhvien=?",[id],callback);
// },
// addSV:function(sinhvien,callback){
//     db.query("Insert into sinhvien(hoten,masinhvien,ngaysinh,gioitinh,diachi,khoa,lop,khoahoc) values(?,?,?,?,?,?,?,?)",[sinhvien.hoten,sinhvien.masinhvien,sinhvien.ngaysinh,sinhvien.gioitinh,sinhvien.diachi,sinhvien.khoa,sinhvien.lop,sinhvien.khoahoc],callback);
// },
// deleteSV:function(id,callback){
//     return db.query("delete from sinhvien where Id=?",[id],callback);
// },
// updateSV:function(id,sinhvien,callback){
//     return db.query("update sinhvien set name=?,class=?,dob=? where Id=?",[sinhvien.name,sinhvien.class,sinhvien.dob,id],callback);
// }
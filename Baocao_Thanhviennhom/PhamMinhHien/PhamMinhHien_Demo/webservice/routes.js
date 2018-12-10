var express = require('express');
var router = express.Router();

var SinhVien = require('./Models/SinhVien');
var db = require('./Dbconnection');

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
        SinhVien.getAllSinhVien(function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});

// router.post('/sinhvien', function(req, res, next) {
//     var hoten = req.body.Hoten;
//     var masinhvien = req.body.Masinhvien;
//     var ngaysinh = req.body.Ngaysinh;
//     var gioitinh = req.body.Gioitinh;
//     var diachi = req.body.Diachi;
//     var khoa = req.body.Khoa;
//     var lop = req.body.Lop;
//     var khoahoc = req.body.Khoahoc;


//     db.query(
//         "INSERT INTO sinhvien(hoten,masinhvien,ngaysinh,gioitinh,diachi,khoa,lop,khoahoc)VALUES(?,?,?,?,?,?,?,?)", [hoten,masinhvien,ngaysinh,gioitinh,diachi,khoa,lop,khoahoc],function(err,row,field){
//             if(err)
//             {
//                 console.log(err);
//                 res.send({'success': false ,'message':'Không nhập dữ liệu được !'})
//             }
//             else {
//                 res.send({'success': true ,'message':'Nhập dữ liệu thành công  !'})
//             }
//         }
//     );
// });

module.exports=router;
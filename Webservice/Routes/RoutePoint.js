var express = require('express');
var router = express.Router();
var db = require('../Dbconnection');

router.get('/viewdiem', function(req, res, next)
{
    db.query("select * from diem ",function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
});
router.post('/adddiem', function(req, res, next) {
    var diem = 
    {
           masv : req.body.Masv,
           mamon : req.body.Mamon,
           lythuyet : req.body.Lythuyet,
           thuchanh : req.body.Thuchanh,
           kiemtra : req.body.Kiemtra,
           tbmon : req.body.Tbmon,
    };
     db.query("select masinhvien from sinhvien where ? = masinhvien",[diem.masv],function(err,row,field)
        {
            if(err)
            {
                console.log(err);
                res.send({'success': false ,'message':'Lỗi phần mềm !'})
            }
            if(row == 0) {
                res.send({'success': false ,'message':' Chưa có thông tin về sinh viên này !'})
            }
            else
            {
                db.query("select mamon,masv from diem where ? = mamon and ? = masv ",[diem.mamon ,diem.masv],function(err,row,field)
                {
                    if(err)
                    {
                        console.log(err);
                        res.send({'success': false ,'message':'Lỗi phần mềm !'})
                    }
                    if(row == 0) {
                        db.query("Insert into diem(masv,mamon,lythuyet,thuchanh,kiemtra,tbmon) values(?,?,?,?,?,?)",[diem.masv,diem.mamon,diem.lythuyet,diem.thuchanh,diem.kiemtra,diem.tbmon],function(err,row,field)
                        {
                            if(err)
                            {
                                console.log(err);
                                res.send({'success': false ,'message':' Lỗi phần mềm !'})
                            }
                            else {
                                res.send({'success': true ,'message':' Thêm điểm cho sinh viên có mã ' + diem.masv + ' thành công !'})
                            }
                        });
                    }
                    else
                    {
                        res.send({'success': false ,'message':' Sinh viên đã nhập điểm ở môn học này !'})
                        
                    }
                });
            }
        });      
});
module.exports = router;

// getAllgiangvien:function(callback){
//     return db.query("Select * from giangvien",callback);
// },
// getgiangvienById:function(id,callback){
//     return db.query("select * from giangvien where magiangvien=?",[id],callback);
// },
// addSV:function(giangvien,callback){
//     db.query("Insert into giangvien(hoten,magiangvien,ngaysinh,gioitinh,diachi,khoa,lop,khoahoc) values(?,?,?,?,?,?,?,?)",[giangvien.hoten,giangvien.magiangvien,giangvien.ngaysinh,giangvien.gioitinh,giangvien.diachi,giangvien.khoa,giangvien.lop,giangvien.khoahoc],callback);
// },
// deleteSV:function(id,callback){
//     return db.query("delete from giangvien where Id=?",[id],callback);
// },
// updateSV:function(id,giangvien,callback){
//     return db.query("update giangvien set name=?,class=?,dob=? where Id=?",[giangvien.name,giangvien.class,giangvien.dob,id],callback);
// }
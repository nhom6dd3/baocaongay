var db = require('../Dbconnection');

var SinhVien={
	getAllSinhVien:function(callback){
		return db.query("Select * from sinhvien",callback);
	},
	getSinhVienById:function(id,callback){
		return db.query("select * from sinhvien where masinhvien=?",[id],callback);
	},
	// addSV:function(hoten,masinhvien,ngaysinh,gioitinh,diachi,khoa,lop,khoahoc,callback){
	// 	return db.query("Insert into sinhvien(hoten,masinhvien,ngaysinh,gioitinh,diachi,khoa,lop,khoahoc) values(?,?,?,?,?,?,?,?)",[hoten,masinhvien,ngaysinh,gioitinh,diachi,khoa,lop,khoahoc],callback);
	// },
	// deleteSV:function(id,callback){
	// 	return db.query("delete from sinhvien where Id=?",[id],callback);
	// },
	// updateSV:function(id,sinhvien,callback){
	// 	return db.query("update sinhvien set name=?,class=?,dob=? where Id=?",[sinhvien.name,sinhvien.class,sinhvien.dob,id],callback);
	// }
};
 module.exports=SinhVien;
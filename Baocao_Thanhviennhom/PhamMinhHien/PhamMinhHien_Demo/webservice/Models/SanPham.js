var db = require('../Dbconnection');

var SanPham={
	getAllSanPham:function(callback){
		return db.query("Select * from tbsanpham",callback);
    },
  getSanPhamById:function(id,callback){
		return db.query("select * from tbsanpham where id=?",[id],callback);
	}
};
 module.exports=SanPham;
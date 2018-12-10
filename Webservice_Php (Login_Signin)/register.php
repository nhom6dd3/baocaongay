<?php include 'config.php';

	$conn = mysqli_connect($server_name, $user_name, $password, $db);
	$json = file_get_contents('php://input');
 
	// decoding the received JSON and store into $obj variable.
	$obj = json_decode($json,true);

	// name store into $name.
	$fullname = $obj['hoten'];

	// same with $username.
	$username = $obj['tendangnhap'];

	// same with $password.
	$password = $obj['matkhau'];

	// same with $position.
	$position = $obj['chucvu'];
	
	if($obj['tendangnhap']!="")
	{
	$sql = "SELECT * FROM TaiKhoan where tendangnhap='$username'";
	$result = $conn->query($sql);	
	
		if($result->num_rows>0){
			echo json_encode('Tên đăng nhập đã tồn tại'); //Kiểm tra tên đăng nhập	 		
		}
		else
		{
			$sqlAdd = "INSERT INTO TaiKhoan (hoten,tendangnhap,matkhau,chucvu) values('$fullname','$username','$password','$position')";
			$add = $conn->query($sqlAdd);

			if($add){
				echo  json_encode('Đăng ký thành công! Mời bạn đăng nhập'); //Câu truy vấn chạy được thì thông báo!
			}
			else{
			   echo json_encode('Xin hãy kiểm tra lại kết nối'); //Lỗi khác		
			}				
		}
	}	
?>

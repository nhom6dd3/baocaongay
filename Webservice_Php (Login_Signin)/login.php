<?php include 'config.php';
	$conn = mysqli_connect($server_name, $user_name, $password, $db);
	$json = file_get_contents('php://input'); 	

	$obj = json_decode($json, true);

	$username = $obj["tendangnhap"];

	$password = $obj["matkhau"];
	
	if($obj["tendangnhap"]!=""){	
	$sql = "SELECT * FROM TaiKhoan where tendangnhap='$username' and matkhau='$password'";
	$result = $conn->query($sql);
	
		if($result->num_rows==0){
			echo json_encode('Tài khoản không đúng');				
		}
		else{		
			echo json_encode('1');				
		}
	}	
	else{
	  echo json_encode("Lỗi - Xin thử lại");
	}
	mysqli_close($conn);
?>
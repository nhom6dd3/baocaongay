
import React,{Component} from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions }from 'react-navigation'; 
import {Platform, ActivityIndicator ,Dimensions,StyleSheet,Image, Text, View,TouchableOpacity , Button , TextInput} from 'react-native';

export default class AddStudents extends React.Component {
  static navigationOptions = ({ navigation }) => {
		return {
		  title: navigation.getParam('otherParam', 'Trang Thêm Sinh Viên Mới'),
		  headerRight: (
		  <View style={styles.ButtonBar}>
			  <Button
				onPress={() => alert('Ứng dụng quản lý sinh viên thuộc nhóm 6 \nThông tin liên hệ:\nEmail:nhom6.dd3@gmail.com\nPhone:0367899999')}
				title="Thông tin"
				color="#4cb1f9"
				marginRight="20"
			  />
		  </View>
		),
		};

	};
  /* Code function Handle -----------------------------------------*/
  onPressAddStudent = ()=> 
  {    
    var sinhvien ={
      Hoten :  this.state.Hoten, 
      Masinhvien : this.state.Masinhvien,
      Ngaysinh : this.state.Ngaysinh,
      Gioitinh : this.state.Gioitinh,
      Diachi : this.state.Diachi,
      Khoa : this.state.Khoa,
      Lop : this.state.Lop,
      Khoahoc : this.state.Khoahoc,
      
    }
    if(sinhvien.Hoten == '' || sinhvien.Masinhvien == '' || sinhvien.Ngaysinh == '' || sinhvien.Gioitinh == '' || sinhvien.Diachi == '' || sinhvien.Khoa == '' || sinhvien.Lop == '' || sinhvien.Khoahoc == '')
		{
			alert(" Vui lòng nhập đầy đủ thông tin trước khi thêm !");
		}
		else
		{
      this.setState({ ActivityIndicator_Loading : true }, () =>
        {
        fetch('http://192.168.244.2:4000/sinhvien/addsv',{
          method:"POST",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body:JSON.stringify(sinhvien)
        })
        .then((response) => response.json())
        .then((res) => {
            if (res.success === true) {
              alert("Thêm sinh viên mới thành công !")
              this.setState({
                isLoading: false,
              }, function(){
                this.props.navigation.navigate('Home');
              });
            }
            else {
              alert(res.message);
              this.setState({ ActivityIndicator_Loading : false });
            }
        })
        .catch((error) =>
            {
                console.error(error);
 
                this.setState({ ActivityIndicator_Loading : false});
            });
      })
    }
  }
  /*------- Back --------------------------------------------------------*/
   onPressBack = ()=>{
      this.props.navigation.navigate('Home');
    }
  /*--------Constructors ------------------------------------------------*/
    constructor(props)
    {
      super(props);
      this.state={
        Hoten:'',
        Masinhvien:'',
        Ngaysinh:'',
        Gioitinh:'',
        Diachi:'',
        Khoa:'',
        Lop:'',
        Khoahoc:'',
        ActivityIndicator_Loading: false, 
      }
    }
    
    /* --------------------------Thiết kế màn hình --------------------------*/
  render() {
    if(this.state.ActivityIndicator_Loading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      
     <View style={styles.body}>
        <Image
          style={{
              flex: 1,
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
          }}
          source={require('./Image/background-6.png')}
        />
          <View style={styles.container}> 
          <TextInput
					style={styles.StudentInput}
					placeholder='   Mã sinh viên'
					placeholderTextColor="#cdcdcd"
					onChangeText={(Masinhvien) => this.setState({Masinhvien})}				
				/>
				<TextInput
					style={styles.StudentInput}
					placeholder='   Họ tên sinh viên'
					placeholderTextColor="#cdcdcd"
					onChangeText={(Hoten) => this.setState({Hoten})}				
				/>
				
        <TextInput
					style={styles.StudentInput}
					placeholder='   Ngày sinh'
					placeholderTextColor="#cdcdcd"
					onChangeText={(Ngaysinh) => this.setState({Ngaysinh})}				
				/>
				<TextInput
					style={styles.StudentInput}
					placeholder='   Giới tính  '
					placeholderTextColor="#cdcdcd"
					onChangeText={(Gioitinh) => this.setState({Gioitinh})}				
				/>
        <TextInput
					style={styles.StudentInput}
					placeholder='   Địa chỉ'
					placeholderTextColor="#cdcdcd"
					onChangeText={(Diachi) => this.setState({Diachi})}				
				/>
				<TextInput
					style={styles.StudentInput}
					placeholder='   Khoa'
					placeholderTextColor="#cdcdcd"
					onChangeText={(Khoa) => this.setState({Khoa})}				
				/>
        <TextInput
					style={styles.StudentInput}
					placeholder='   Lớp'
					placeholderTextColor="#cdcdcd"
					onChangeText={(Lop) => this.setState({Lop})}				
				/>
				<TextInput
					style={styles.StudentInput}
					placeholder='   Khóa học'
          placeholderTextColor="#cdcdcd"
          
					onChangeText={(Khoahoc) => this.setState({Khoahoc})}				
				/>
        <View style={styles.ButtonLogin}>
            <TouchableOpacity style={styles.btnLuu} >
            <Button  title="Lưu thông tin" color="#1e1e1e8b" onPress= {()=> this.onPressAddStudent()}></Button>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnBack} >
            <Button  title="Quay lại" color="#e71a5f4a"	onPress ={()=> this.onPressBack()}></Button>
            </TouchableOpacity>
          </View>
        </View>
        {
        
        this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
        
        }
        
      </View>
     );
  }
}



const styles = StyleSheet.create({
  body:{
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
  },
  container: {
    position: 'absolute',
    top:20,
    left:60,
    },
  StudentInput:{
    marginTop: 5,
    marginBottom: 5,
    width: 300,
    height:40,
    borderWidth:0.5,
    borderRadius: 5,
    color:'#fff',
    fontSize:16, 
    },

  ButtonLogin:{
	  marginTop:30,
    marginBottom: 10,
  },
  btnLuu:{
    bottom:10,
  },
  btnBack:{

  }
});

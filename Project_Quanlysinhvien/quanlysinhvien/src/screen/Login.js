/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Keyboard, Image, Dimensions,Button,TextInput, Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Login extends Component{
	static navigationOptions = ({ navigation }) => {
		return {
		  title: navigation.getParam('otherParam', 'Trang Đăng Nhập'),
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

	constructor(props){
		super(props)
		this.state={
			Username:'',
			Password:'',
		}
	}
	
	login = () =>{
		const {Username,Password} = this.state;
		if(Username==""){
			alert("Vui lòng nhập Tên Đăng Nhập");
			this.setState({tendangnhap:'Please enter tendangnhap'})

		}
		else if(Password==""){
			alert("Vui lòng nhập Mật Khẩu");
			this.setState({matkhau:'Please enter password'})
		}
		else{
			
			var payload = {
				tendangnhap: Username,
				matkhau: Password
			};

			var data = new FormData();
			data.append("json", JSON.stringify(payload));
		
		fetch('http://192.168.0.100:82/login.php',{
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			method:'POST',			
			body:JSON.stringify({tendangnhap: Username,
				matkhau: Password})
			
		})
		.then((response) => response.json())
		 .then((responseJson)=>{
			 if(responseJson == '1'){
				 // Nếu login.php trả về là 1 thì chuyển sang trang Home
				 alert("Đăng nhập thành công!");
				 this.props.navigation.navigate("Home");
			 }
			 else{
				 alert(responseJson);
				 
			 }
		 })

		 .catch((error)=>{
		 console.error(error);
		 });
		}		
		Keyboard.dismiss();
	}
  render() {
    return (
	<View style={styles.body}>
		
		<Image
          style={{
			  flex: 1,
				width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
			  }}
		  source={require('./Image/background-3.jpg')}
          />
		 
      <View style={styles.container}>
		<TextInput
			style={styles.InputEdit}
			placeholder='Tên đăng nhập'
			placeholderTextColor="#ffffffcc"	
			onChangeText={Username => this.setState({Username})}			
		/>
		<TextInput
			style={styles.InputEdit}
			placeholder='Mật khẩu'
			placeholderTextColor="#ffffffcc"	
			onChangeText={Password => this.setState({Password})}			
		/>
		<View style={styles.ButtonLogin}>
			<Button
				title="ĐĂNG NHẬP"
				color="#000000ad"
				onPress={this.login}				
			/>
		</View>
		<Button
			title="ĐĂNG KÝ"
			color="#000000ad"			
            onPress={() => this.props.navigation.navigate('Sign')}
		/>
      </View>
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
		top: Dimensions.get('window').height/2-115,
		left: Dimensions.get('window').width/2-125,
  },
  InputEdit:{
	marginTop: 5,
	marginBottom: 5,
	width: 260,
	height:40,
	borderWidth:0.5,
	borderRadius: 5,
	color: '#fff',
	backgroundColor:'#0000004d',	
  },
  ButtonBar:{
	  marginRight:15,
  },
  ButtonLogin:{
	  marginTop:15,
	  marginBottom: 10,
  },
  title:{
		position: 'absolute',
		top: Dimensions.get('window').height/20,
		left: Dimensions.get('window').width/2-135,
		color: '#7e7',
		fontSize: 40,
		backgroundColor:'#0000004d',
		paddingLeft:20,
		paddingRight:20,
	},
});
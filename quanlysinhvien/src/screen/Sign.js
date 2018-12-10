/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, Dimensions,Button,TextInput, Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Sign extends Component{
	static navigationOptions = ({ navigation }) => {
		return {
		  title: navigation.getParam('otherParam', 'Trang Đăng Ký'),
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
			Fullname:'',
			Username:'',
			Password:'',
			Position:''
		}
	}
	
	userRegister = () =>{
		const{Fullname, Username, Password, Position} = this.state;
		if(Fullname==""){
			alert("Vui lòng nhập Họ Tên");
			this.setState({hoten:'Nhập Họ Tên'})

		}
		else if(Username==""){
			alert("Vui lòng nhập Tên Đăng Nhập");
			this.setState({tendangnhap:'Nhập Tên Đăng Nhập'})

		}
		else if(Password==""){
			alert("Vui lòng nhập Mật Khẩu");
			this.setState({matkhau:'Nhập Mật Khẩu'})
		}
		else if(Position==""){
			alert("Vui lòng nhập Chức Vụ");
			this.setState({chucvu:'Nhập Chức Vụ'})

		}
		else{
		fetch('http://192.168.0.100:82/register.php',{
			header:{
				'Accept':'application/json',
				'Content-type': 'application/json'
			},
			method: 'POST',
			
			body:JSON.stringify({
				hoten: Fullname,
				tendangnhap: Username,
				matkhau: Password,
				chucvu: Position
			})
		})
		.then((response) => response.json())
			.then((responseJson) => {
				alert(responseJson);
				if(responseJson == 'Đăng ký thành công! Mời bạn đăng nhập')
				{
					this.props.navigation.navigate('Login')
				}
			})
			.catch((error)=>{
				console.error(error);
		});
		}
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
		  source={require('./Image/background-6.png')}
          />
		 
      <View style={styles.container}>
		<TextInput
			style={styles.InputEdit}			
			placeholder='Họ tên'
			placeholderTextColor="#ffffffcc"
			onChangeText = {Fullname => this.setState({Fullname})}		
		/>
		<TextInput
			style={styles.InputEdit}
			placeholder='Tên đăng nhập'
			placeholderTextColor="#ffffffcc"
			onChangeText = {Username => this.setState({Username})}		
		/>
		<TextInput
			style={styles.InputEdit}
			placeholder='Mật khẩu'
			placeholderTextColor="#ffffffcc"	
			onChangeText = {Password => this.setState({Password})}			
		/>
		<TextInput
			style={styles.InputEdit}
			placeholder='Chức vụ'
			placeholderTextColor="#fff"
			onChangeText = {Position => this.setState({Position})}			
		/>
		<Button
			style={styles.ButtonLogin}
			title="ĐĂNG KÝ"
			color="#ffffff5c"
			onPress={this.userRegister}
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
	title:{
		position: 'absolute',
		top: Dimensions.get('window').height/20,
		left: Dimensions.get('window').width/2-100,
		color: '#7e7',
		fontSize: 40,
		backgroundColor:'#0000004d',
		paddingLeft:20,
		paddingRight:20,
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
  },
});

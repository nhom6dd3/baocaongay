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
  render() {
    return (
	<View style={styles.body}>

		<Image
          style={{
			  flex: 1,
				width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
			  }}
		  source={require('./image/background1.png')}
          />
		 
      <View style={styles.container}>
		<TextInput
			style={styles.InputEdit}			
			placeholder='Họ tên'
			placeholderTextColor="#ffffffcc"			
		/>
		<TextInput
			style={styles.InputEdit}
			placeholder='Tên đăng nhập'
			placeholderTextColor="#ffffffcc"			
		/>
		<TextInput
			style={styles.InputEdit}
			placeholder='Số điện thoại'
			placeholderTextColor="#ffffffcc"			
		/>
		<TextInput
			style={styles.InputEdit}
			placeholder='Chức vụ'
			placeholderTextColor="#fff"			
		/>
		<Button
			style={styles.ButtonLogin}
			title="ĐĂNG KÝ"
			color="#ffffff5c"
			onPress={() => this.props.navigation.navigate('Login')}
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
	height:30,
	borderWidth:0.5,
	borderRadius: 5,	
  },
  ButtonLogin:{
  },
});

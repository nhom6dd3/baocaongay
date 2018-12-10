/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button,TextInput, Platform, StyleSheet, Text, View} from 'react-native';


export default class Demo_Props_State extends Component{

  constructor(props)
  {
    super(props);
    this.state={
      username :'Props user',
      password :'Props pass',
      isLoading: false,
    }
  }

  // Xử lý hàm đăng ký 
  dangnhap = ()=> 
  {
    alert("User  là : " + this.state.username + " \n Pass là : " + this.state.password);
  }

  /*-----------------------------------------------------------------------------*/
    /* Phầnthiết kế giao diện  */
  render() {
    return (
  <View style={styles.body}>
      <View style={styles.containerLogin}>
        <TextInput
          style={styles.InputEdit}
          placeholder='Tên đăng nhập'
          placeholderTextColor="#ffffffcc"
          onChangeText={(username) => this.setState({username})}        
        />
        <TextInput
          style={styles.InputEdit}
          placeholder='Mật khẩu'
          placeholderTextColor="#ffffffcc"
          onChangeText={(password) => this.setState({password})}        
        />
          <Button
            title="ĐĂNG NHẬP"
            color="#0000004a"
            onPress={() => this.dangnhap()}   
          />
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({

  InputEdit:{
  marginTop: 5,
  marginBottom: 5,
  width: 300,
  height:50,
  borderWidth:0.5,
  borderRadius: 5,  
  },
});
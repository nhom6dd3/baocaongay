/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View, 
  Image, Dimensions,
} from 'react-native';

var icon;

export default class Students extends Component{
  constructor(props){
    super(props);
    this.state={
      
    }

  }
  render() {
    return (
      <View style={styles.product}>
        
        <View style={styles.container}>
          <Text> Họ tên : {this.props.Hoten} </Text>
          <Text> Mã sinh viên : {this.props.Masinhvien} </Text>
          <Text> Ngày sinh : {this.props.Ngaysinh} </Text>
          <Text> Giói tính : {this.props.Gioitinh} </Text>
          <Text> Địa chỉ: {this.props.Diachi} </Text>
          <Text> Khoa: {this.props.Khoa} </Text>
          <Text> Lop: {this.props.Lop} </Text>
          <Text> Khóa học : {this.props.Khoahoc} </Text>
        </View>       
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        top:5,
        left:20,
        width: Dimensions.get('window').width,
        height:200,
        paddingLeft:15,
        paddingTop:15,
        borderWidth:0.7,
        borderRadius: 5,
    },



});

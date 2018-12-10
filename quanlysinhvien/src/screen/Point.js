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

export default class Point extends Component{
  constructor(props){
    super(props);
    this.state={
      
    }

  }
  render() {
    return (
      <View style={styles.product}>
        
        <View style={styles.container}>
          <Text> Mã sinh viên : {this.props.Masv} </Text>
          <Text> Mã môn học  : {this.props.Mamon} </Text>
          <Text> Điểm lý thuyết  : {this.props.Lythuyet} </Text>
          <Text> Điểm thực hành  : {this.props.Thuchanh} </Text>
          <Text> Điểm kiểm tra : {this.props.Kiemtra} </Text>
          <Text> Điểm trung bình môn : {this.props.Tbmon} </Text>
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
        height:150,
        paddingLeft:15,
        paddingTop:15,
        borderWidth:0.7,
        borderRadius: 5,
    },
});

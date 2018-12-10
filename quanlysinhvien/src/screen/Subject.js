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
          <Text> Mã môn học : {this.props.Mamon} </Text>
          <Text> Tên môn học : {this.props.Tenmon} </Text>
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
        height:70,
        paddingLeft:15,
        paddingTop:15,
        borderWidth:0.7,
        borderRadius: 5,
    },
});

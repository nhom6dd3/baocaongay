
import React,{Component} from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions }from 'react-navigation'; 
import {ActivityIndicator,Platform,Dimensions,Image, StyleSheet,FlatList, Text, View,TouchableOpacity , Button , TextInput} from 'react-native';
import Students from './Students';

 export default class Demo_Flastlist extends React.Component {
    // Tạo constructor 
    constructor(props)
    {
      super(props);
      this.state ={ 
        isLoading: true,
      }
    }
    componentDidMount(){
      return fetch('http://192.168.244.2:4000/sinhvien')
        .then((response) => response.json())
        .then((responseJson) => {
  
          this.setState({
            isLoading: false,
            dataSource: responseJson,
          }, function(){
  
          });
  
        })
        .catch((error) =>{
          console.error(error);
        });
    }
  
    // Hàm thêm sinh viên 
    onPressAdd=()=> {
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'AddStudents' })
            ],
            }))
    };
    // Hàm thoat 
    onPressBack = ()=>{
        this.props.navigation.navigate('Home');
    };
    
    render() {
    return (
            <View>
                
                <FlatList
                    
                      data={this.state.dataSource}
                      renderItem={({item}) => <Students Hoten = {item.hoten} Masinhvien = {item.masinhvien} Ngaysinh = {item.ngaysinh}  Gioitinh = {item.gioitinh} Diachi = {item.diachi}  Khoa = {item.khoa} Lop = {item.lop} Khoahoc = {item.khoahoc}/>}
                      keyExtractor={(item, index) => index.toString()}
                    />
              </View>
      );
  }
}


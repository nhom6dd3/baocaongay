
import React,{Component} from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions }from 'react-navigation'; 
import {Platform, StyleSheet, Text, View,TouchableOpacity , Button , TextInput} from 'react-native';

 export default class Home extends React.Component {
    onPressBack = ()=>{
        this.props.navigation.navigate('Login');
    }
    
    render() {
      return (
       <View style={stylehome.container}>
          <View style={{flex:1}} >
          		<Text style={stylehome.tieude}> TRANG CHỦ  </Text> 
          </View>
          
          <View style={{flex: 1}}>
            <TouchableOpacity style={stylehome.thongtin} > 
                <Text  style={stylehome.texttt}
                        onPress={() => {
                            this.props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'Xemdssv' })
                            ],
                            }))
                        }}
                        > THÔNG TIN SINH VIÊN </Text>
            </TouchableOpacity> 
            <TouchableOpacity style={stylehome.thongtin} > 
                <Text style={stylehome.texttt}
                            onPress={() => {
                                this.props.navigation.dispatch(StackActions.reset({
                                index: 0,
                                actions: [
                                    NavigationActions.navigate({ routeName: 'Xemdsgv' })
                                ],
                                }))
                            }}> THÔNG TIN GIẢNG VIÊN </Text>
		    </TouchableOpacity>
		        
          </View>

          <View style={{flex:1 , alignItems:'center',justifyContent: 'center',}}>
          		<View style={{width:'40%'}}>
		          <TouchableOpacity style={stylehome.btn} >
		            <Button  title="Đăng Xuất" onPress= {()=> this.onPressBack()}></Button>
		          </TouchableOpacity>
		        </View>
          </View>
        </View>
        );
    }
  }


stylehome = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
    },
    tieude:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'800',
        color:'green',
        marginTop:'35%'
    },
    thongtin:{
        flex:3,
        width:'80%',
        marginTop:20,
        backgroundColor:'#841584',
        marginLeft:'10%',  
        paddingBottom: 0,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:5,
    },
    texttt:{
        fontSize:24,
        textAlign:'center',
        color:'white',
        fontWeight:'800',
    }
      });


import React,{Component} from 'react';
import {Platform, StyleSheet, View,Text,TextInput , TouchableOpacity, Button} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions }from 'react-navigation'; 
// Version can be specified in package.json
export default class Dangky extends React.Component {
  constructor(props)
    {
      super(props);
      this.state={
        user:'',
        pass:'',
      }
    }
    onPressBack= ()=>{
      this.props.navigation.navigate('Dangnhap');
    };
  render() {
    return (
      <View style={{flex: 1}}>
      <View style={{flex: 0.8}} >
          <Text style={styledangky.tieude}> ĐĂNG KÝ TÀI KHOẢN </Text> 
      </View>
      
      <View style={{flex: 2}}> 
        <View style={{flex:1,justifyContent:'space-around'}}>
          <TextInput  placeholder=" Tên đăng nhập ....." style={styledangky.txtinput} value={this.props.user}/>    
        </View>
        <View style={{flex:1}}> 
          <TextInput  placeholder=" Mật khẩu ...." style={styledangky.txtinput} value={this.props.pass}/>          
        </View>
      </View>

      <View style={{flex: 4}}>
          <View style={[styledangky.flexdong]}>
          <TouchableOpacity style={styledangky.btn} >
            <Button  title=" Xác Nhận "  onPress= {()=> this.onPressOK()}></Button>
          </TouchableOpacity>

          <TouchableOpacity style={styledangky.btn} >
            <Button  title="Thoát "  onPress ={()=> this.onPressBack()}></Button>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    );
  }  
}
styledangky = StyleSheet.create({
  tieude:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'800',
    color:'red',
    marginTop:20,
  },
  flexdong:{
    flex: 1,
    flexDirection: 'row',

  },
  txtinput:{
    borderColor:'#C7CBD1',
    borderStyle:'solid',
    borderTopWidth:1,
    borderBottomWidth:1,
    color:'black',
    width:'100%', 
    height: 40,
    fontSize:16,
    color:'black',
    paddingLeft:20,
  },

  btn:{
    width: '40%',
    textAlign:'center',
    marginLeft:'5%',
    marginRight:'5%',
  },
});
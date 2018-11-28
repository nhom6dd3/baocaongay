
import React,{Component} from 'react';
import {Platform, Alert,StyleSheet, View,Text,TextInput , TouchableOpacity, Button} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions }from 'react-navigation'; 
// Version can be specified in package.json
export default class Dangnhap extends React.Component {
  
    constructor(props)
    {
      super(props);
      this.state={
        user:'',
        pass:'',
      }
    }
    onPressDangky = ()=>{
      this.props.navigation.navigate('Dangky');
    };
    onPressDangnhap = ()=>{
      this.props.navigation.navigate('Home');
      // if( user != "admin" && pass != "admin")
      // {
        
      //   Alert.alert('Bạn nhập sai thông tin!');
      // }
      // else
      // {
      //   this.props.navigation.navigate('Home');
      // }
    };
  render() {
    return (
      <View style={{flex: 1}}>
      <View style={{flex: 0.8}} >
          <Text style={styledangnhap.tieude}> ĐĂNG NHẬP TÀI KHOẢN </Text> 
      </View>
      
      <View style={{flex: 2}}> 
        <View style={{flex:1,justifyContent:'space-around'}}>
          <TextInput  autoFocus placeholder=" Tên đăng nhập ....." style={styledangnhap.txtinput} 
          onChangeText={(user) => this.setState({user})}
         value={this.state.user}/>    
        </View>
        <View style={{flex:1}}> 
          <TextInput id='password' placeholder=" Mật khẩu ...." style={styledangnhap.txtinput}
           onChangeText={(pass) => this.setState({pass})} value={this.state.pass}/>          
        </View>
      </View>

      <View style={{flex: 4}}>
          <View style={[styledangnhap.flexdong]}>
          <TouchableOpacity style={styledangnhap.btn} >
            <Button  title="Dăng Nhập "  onPress= {()=> this.onPressDangnhap()}></Button>
          </TouchableOpacity>

          <TouchableOpacity style={styledangnhap.btn} >
            <Button  title="Đăng Ký "  onPress ={()=> this.onPressDangky()}></Button>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    );
  }  
}
styledangnhap = StyleSheet.create({
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
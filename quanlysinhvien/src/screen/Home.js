
import React,{Component} from 'react';
import { createAppcontainerhome, createStackNavigator, StackActions, NavigationActions }from 'react-navigation'; 
import {Platform,Dimensions,Image, StyleSheet, Text, View,TouchableOpacity , Button , TextInput} from 'react-native';

 export default class Home extends React.Component {
    /*-----------------------------------------------------------------------------*/
    /* Phần code hàm */
      static navigationOptions = ({ navigation }) => {
		return {
		  title: navigation.getParam('otherParam', 'Trang Chủ'),
		  headerRight: (
		  <View >
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
    onPressNavsv = () => 
    {
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'ViewStudents' })
            ],
        }))
    }
    onPressNavdiem = () => 
    {
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'ViewPoint' })
            ],
        }))
    }
    onPressNavmon = () => 
    {
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'ViewSubject' })
            ],
        }))
    }
    
    onPressBack = ()=>{
        this.props.navigation.navigate('Login');
    }
    
    //------------------------------------------------------------------------------
    // Phần thiết kế màn hình và css 
    render() {
      return (
        <View style={stylehome.body}>
            <Image
            style={{
                flex: 1,
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
            }}
            source={require('./Image/background-9.jpg')}
            />
            <View style={stylehome.containerhome}> 
                <Text style={stylehome.tieude}> TRANG CHỦ </Text> 
                
                <View>
                    <TouchableOpacity style={stylehome.thongtin} > 
                        <Text  style={stylehome.vbtext} color="#e71a5f4a" onPress ={()=> this.onPressNavsv()}> SINH VIÊN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={stylehome.thongtin} > 
                        <Text  style={stylehome.vbtext}color="#e71a5f4a" onPress ={()=> this.onPressNavdiem()}> ĐIỂM </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={stylehome.thongtin} > 
                        <Text  style={stylehome.vbtext} color="#e71a5f4a" onPress ={()=> this.onPressNavmon()}> MÔN HỌC </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={stylehome.btn} >
                        <Button  title="Thoát" onPress= {()=> this.onPressBack()}></Button>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        );
    }
  }


  const stylehome = StyleSheet.create({
    body:{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
    },
    containerhome: 
    {
      position: 'absolute',
      top:20,
      left:95,
    }, 
    tieude:{
      textAlign:'center',
      fontSize:32,
      fontWeight:'800',
      color:'#e61a5f',
    },
    thongtin:{
        width:220,
        height:60,
        marginTop:30,
        backgroundColor:'#e71a5f9c',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:5,
    },
    vbtext:{
        fontSize:32,
        textAlign:'center',
        color:'#bbbbbb',
        fontWeight:'800',
    },
    btn:{
        marginTop:90,
    }
  });

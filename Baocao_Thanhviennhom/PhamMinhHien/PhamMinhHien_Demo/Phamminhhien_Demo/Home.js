
import React,{Component} from 'react';
import { createAppcontainerhome, createStackNavigator, StackActions, NavigationActions }from 'react-navigation'; 
import {Platform,Dimensions,Image, StyleSheet, Text, View,TouchableOpacity , Button , TextInput} from 'react-native';

 export default class Home extends React.Component {

    onPressSectionlist= () => 
    {
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Demo_Sectionlist' })
            ],
        }))
    }
    onPressFlastlist = () => 
    {
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Demo_Flastlist' })
            ],
        }))
    }
    onPressPropsstate = () => 
    {
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Demo_Props_State' })
            ],
        }))
    }
    onPressListview = () => 
    {
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Demo_Listview' })
            ],
        }))
    }


    render() {
      return (
        <View style={stylehome.body}>
            
            <View style={stylehome.containerhome}> 
                <Text style={stylehome.tieude}> TRANG CHỦ </Text> 
                
                <View>
                    <TouchableOpacity style={stylehome.thongtin} > 
                        <Text  style={stylehome.vbtext} color="#e71a5f4a" onPress ={()=> this.onPressPropsstate()}> Props State </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={stylehome.thongtin} > 
                        <Text  style={stylehome.vbtext}color="#e71a5f4a" onPress ={()=> this.onPressFlastlist()}> FlastList  </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={stylehome.thongtin} > 
                        <Text  style={stylehome.vbtext} color="#e71a5f4a" onPress ={()=> this.onPressListview()}> ListView </Text>
                    </TouchableOpacity>

					
					<TouchableOpacity style={stylehome.thongtin} > 
                        <Text  style={stylehome.vbtext} color="#e71a5f4a" onPress ={()=> this.onPressSectionlist()}> SectionList </Text>
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


import React,{Component} from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions }from 'react-navigation'; 
import {Platform, StyleSheet,SectionList, Text, View,TouchableOpacity , Button , TextInput} from 'react-native';

 export default class ViewStudents extends React.Component {

    // Tạo constructor 
    constructor(props)
    {
      super(props);
      this.state={
        txtHoten:'',
        txtMasinhvien:'',
        txtNgaysinh:'',
        txtGioitinh:'',
        txtDiachi:'',
        txtKhoa:'',
        txtLop:'',
        txtKhoahoc:'',
      }
    }
    // Hàm thêm sinh viên 
    onPressAdd=()=> {
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Themsv' })
            ],
            }))
    };
    // Hàm thoat 
    onPressBack = ()=>{
        this.props.navigation.navigate('Home');
    };
    // hàm chi tiết 
    onPressChitiet = ()=> {
      this.setState({
        masp:this.props.masp,
        tensp:this.props.tensp,
        sltsp:this.props.sltsp,
      });
    }
    render() {
      return (
       <View style={styleviewsv.container}>
          <View style={{flex: 0.8}} >
          		<Text style={styleviewsv.tieude}> DANH SÁCH SINH VIÊN  </Text> 
          </View>
          <View style={{flex: 8}}>
            <SectionList
                 sections={[
                    {title: 'Khoa Công Nghệ Thông Tin', data: ['Devin']},
                    {title: 'Khoa Tiếng Anh', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                    ]}
                renderItem={({item}) => <Text style={styleviewsv.item}>{item}</Text>}
                renderSectionHeader={({section}) => <Text style={styleviewsv.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
                />
            </View>
            <View style={{flex: 1.2}}>
                    <View style={[styleviewsv.flexdong]}>
                    <TouchableOpacity style={styleviewsv.btn} >
                        <Button  title="Thêm mới " color="#841584" onPress= {()=> this.onPressAdd()}></Button>
                    </TouchableOpacity>

                    <TouchableOpacity style={styleviewsv.btn} >
                        <Button  title="Quay lại" color="#841584" onPress ={()=> this.onPressBack()}></Button>
                    </TouchableOpacity>
                    </View>
            </View>
        </View>
        );
    }
  }


styleviewsv = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    tieude:{
      textAlign:'center',
      fontSize:20,
      fontWeight:'800',
      color:'red',
    },
    flexdong:{
      flex: 1,
      flexDirection: 'row',
      paddingTop:0,
      paddingBottom:0,
    },
   
    btn:{
      height:20,
      width: '40%',
      textAlign:'center',
      marginLeft:'5%',
      marginRight:'5%',
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
  });

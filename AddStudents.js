
import React,{Component} from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions }from 'react-navigation'; 
import {Platform, StyleSheet, Text, View,TouchableOpacity , Button , TextInput} from 'react-native';

 export default class AddStudents extends React.Component {

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
    // Hàm lưu sinh viên
    onPressSave=()=> {

    }
    // Hàm thoat 
    onPressBack = ()=>{
          this.props.navigation.navigate('Home');
    }
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
       <View style={{flex: 1}}>
          <View style={{flex: 0.8}} >
          		<Text style={styles.tieude}> THÊM MỚI SINH VIÊN  </Text> 
          </View>
          
          <View style={{flex: 8}}> 
				<View style={styles.flexdong}>
		          <Text style={styles.txttext}> Họ tên : </Text> 
		          <TextInput style={styles.txtinput} value={this.props.txtHoten}/>    
		        </View>
		        <View style={[styles.flexdong , styles.khoangcach]}> 
		          <Text style={styles.txttext}> Mã Sinh Viên : </Text> 
		          <TextInput style={styles.txtinput} value={this.props.txtMasinhvien}/>          
		        </View>
		        <View style={[styles.flexdong , styles.khoangcach]}> 
		          <Text style={styles.txttext}> Ngày Sinh : </Text> 
		          <TextInput style={styles.txtinput} value={this.props.txtNgaysinh}/> 
		        </View>     
		        <View style={[styles.flexdong , styles.khoangcach]}> 
		          <Text style={styles.txttext}> Giới tính : </Text> 
		          <TextInput style={styles.txtinput} value={this.props.txtGioitinh}/> 
		        </View>

		        <View style={[styles.flexdong , styles.khoangcach]}> 
		          <Text style={styles.txttext}> Địa chỉ : </Text> 
		          <TextInput style={styles.txtinput} value={this.props.txtDiachi}/> 
		        </View>

		        <View style={[styles.flexdong , styles.khoangcach]}> 
		          <Text style={styles.txttext}> Khoa : </Text> 
		          <TextInput style={styles.txtinput} value={this.props.txtKhoa}/> 
		        </View>

		        <View style={[styles.flexdong , styles.khoangcach]}> 
		          <Text style={styles.txttext}> Lớp : </Text>  
		          <TextInput style={styles.txtinput} value={this.props.txtLop}/> 
		        </View>

		        <View style={[styles.flexdong , styles.khoangcach]}> 
		          <Text style={styles.txttext}> Khóa Học : </Text>  
		          <TextInput  style={styles.txtinput} 
		                      value={this.state.txtKhoahoc}/>               
		        </View>
          </View>

          <View style={{flex: 1.2}}>
          		<View style={[styles.flexdong]}>
		          <TouchableOpacity style={styles.btn} >
		            <Button  title="Lưu" color="#841584" onPress= {()=> this.onPressSave()}></Button>
		          </TouchableOpacity>

		          <TouchableOpacity style={styles.btn} >
		            <Button  title="Quay lại" color="#841584" onPress ={()=> this.onPressBack()}></Button>
		          </TouchableOpacity>
		        </View>
          </View>
        </View>
        );
    }
  }


  styles = StyleSheet.create({
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
    khoangcach:{
      
    },
    txtinput:{
      borderColor:'#C7CBD1',
      borderLeftColor:'#C7CBD1',
      borderStyle:'solid',
      borderTopWidth:1,
      borderBottomWidth:1,
      borderLeftWidth:1,
      color:'black',
      width: '80%',
      height: 40,
      fontSize:16,
      color:'black',
      justifyContent: 'space-around',
    },
    txttext: {
      borderColor:'#C7CBD1',
      borderStyle:'solid',
      borderBottomWidth:1,
      borderTopWidth:1,
      paddingTop:10,
      margin:0,
      fontSize:16,
      color:'black',
      width: '40%',
      height:40,
      textAlign:'center',
      justifyContent: 'space-around',
    },  
    btn:{
      height:20,
      width: '40%',
      textAlign:'center',
      marginLeft:'5%',
      marginRight:'5%',
    },
  });

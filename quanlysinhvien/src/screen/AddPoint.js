
import React,{Component } from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions }from 'react-navigation'; 
import {Platform, Alert,StyleSheet, Picker,ActivityIndicator ,Item,Text, Image,Dimensions,View,TouchableOpacity , Button , TextInput} from 'react-native';



 export default class AddPoint extends React.Component {
  static navigationOptions = ({ navigation }) => {
		return {
		  title: navigation.getParam('otherParam', 'Trang Nhập Điểm Sinh Viên'),
		  headerRight: (
		  <View style={styles.ButtonBar}>
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
    // Tạo constructor 
    constructor(props)
    {
      super(props);
      this.state={
        Masv:'',
        Mamon:'',
        Lythuyet:'',
        Thuchanh:'',
        Kiemtra:'',
        Tbmon:'',
        data:[],
        isLoading: true,
      }
    }
    componentDidMount(){
      this.setState({ isLoading: true }, () =>{
      return fetch('http://192.168.244.2:4000/monhoc/getmamon')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            data: responseJson,
          }, function()
          {

          });
        })
        .catch((error) =>{
          console.error(error);
        });
      })
      
    }
   
    // Hàm thêm điểm 
    onPressAddPoint = ()=>
    {
      this.setState({ isLoading: true }, () =>{
        var diem = 
        {
          Masv:this.state.Masv, 
          Mamon:this.state.Mamon,
          Lythuyet:this.state.Lythuyet,
          Thuchanh:this.state.Thuchanh,
          Kiemtra:this.state.Kiemtra,
          Tbmon:this.state.Tbmon,
        }
        
        if(diem.Masv == '' || diem.Mamon == '' )
        {
          alert(" Vui lòng chọn thông tin trước khi thêm điểm!");
          this.setState({isLoading: false});
        }
        else
        {
            if(diem.Lythuyet == '' || diem.Thuchanh == '' || diem.Kiemtra == '' || diem.Tbmon == '')
            {
                alert(" Vui lòng nhập điểm !");
                this.setState({isLoading: false});
            }
            else{
              fetch("http://192.168.244.2:4000/diem/adddiem", {
              method: 'POST',
              headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              },
              body:JSON.stringify(diem)
              })
              .then((response) => response.json())
              .then((res) => {
                if (res.success === true) {
                  alert(res.message);
                  this.setState({
                    isLoading: false,
                  }, function(){
                    this.props.navigation.navigate('Home');
                  });
                }
                else {
                  alert(res.message);
                  this.setState({isLoading: false});
              }
            })
            }
        }
      })
    }
    // Hàm thoat 
    onPressBack = ()=>{
      this.props.navigation.navigate('Home');
    }
    /*--------------------------------------------------------------------------------*/

    GetPickerSelectedItemValue=()=>{
      Alert.alert(this.state.Mamon);
    }
    
    render() {
      
      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }
      return (
       <View style={styles.body}>
          <Image
            style={{
                flex: 1,
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
            }}
            source={require('./Image/background-6.png')}
          />
            <View style={styles.container}> 
            
            
            
            <TextInput
            style={styles.StudentInput}
            placeholder='   Mã sinh viên'
            placeholderTextColor="#cdcdcd"
            onChangeText={(Masv) => this.setState({Masv})}
          />
  
          <Text> Chọn mã môn </Text>
            <Picker
            selectedValue={this.state.Mamon}
 
            onValueChange={(itemValue, itemIndex) => this.setState({Mamon: itemValue})} >
            <Picker.Item label="Chọn môn học thêm điểm "/>
            { this.state.data.map((item, key)=>(
            
            <Picker.Item label={item.tenmon} value={item.mamon} key={key} />)
            )}
            
          </Picker>

          <Button title="Xem môn đã chọn chưa!" onPress={()=>this.GetPickerSelectedItemValue()} />

          <TextInput
            style={styles.StudentInput}
            placeholder='   Điểm lý thuyết'
            placeholderTextColor="#cdcdcd"
            onChangeText={(Lythuyet) => this.setState({Lythuyet})}				
          />
          <TextInput
            style={styles.StudentInput}
            placeholder='   Điểm thực hành  '
            placeholderTextColor="#cdcdcd"
            onChangeText={(Thuchanh) => this.setState({Thuchanh})}				
          />
          <TextInput
            style={styles.StudentInput}
            placeholder='   Điểm kiểm tra cuối kỳ '
            placeholderTextColor="#cdcdcd"
            onChangeText={(Kiemtra) => this.setState({Kiemtra})}				
          />
          <TextInput
            style={styles.StudentInput}
            placeholder='   Điểm trung bình môn'
            placeholderTextColor="#cdcdcd"
            onChangeText={(Tbmon) => this.setState({Tbmon})}				
          />
          
          <View style={styles.ButtonLogin}>
              <TouchableOpacity style={styles.btnLuu} >
              <Button  title="Lưu điểm" color="#1e1e1e8b" onPress= {()=> this.onPressAddPoint()}></Button>
              </TouchableOpacity>
  
              <TouchableOpacity style={styles.btnBack} >
              <Button  title="Quay lại" color="#e71a5f4a"	onPress ={()=> this.onPressBack()}></Button>
              </TouchableOpacity>
            </View>
          </View>
        </View>
       );
    }
  }
  
  
  
  const styles = StyleSheet.create({
    body:{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    container: {
      position: 'absolute',
      top:20,
      left:60,
      },
    StudentInput:{
      marginTop: 5,
      marginBottom: 5,
      width: 300,
      height:40,
      borderWidth:0.5,
      borderRadius: 5,
      color:'#fff',
      fontSize:16, 
      },
    ButtonLogin:{
      marginTop:30,
      marginBottom: 10,
    },
    btnLuu:{
      bottom:10,
    },
    btnBack:{
  
    }
  });
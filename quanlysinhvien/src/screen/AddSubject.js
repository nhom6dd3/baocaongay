
import React,{Component} from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions }from 'react-navigation'; 
import {Platform, ActivityIndicator ,Dimensions,StyleSheet,Image, Text, View,TouchableOpacity , Button , TextInput} from 'react-native';

export default class AddSubject extends React.Component {
  static navigationOptions = ({ navigation }) => {
		return {
		  title: navigation.getParam('otherParam', 'Trang Thêm Môn Học Mới'),
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
  /* Code function Handle -----------------------------------------*/
  onPressAddSubject = ()=> 
  { 
    this.setState({ isLoading: true }, () =>{   
    var monhoc ={
      Mamon :  this.state.Mamon, 
      Tenmon : this.state.Tenmon
    }
    if(monhoc.Mamon == '' || monhoc.Tenmon == '' )
    {
      alert(" Vui lòng nhập thông tin trước khi thêm !");
      this.setState({isLoading: false});
    }
    else
    {
    fetch('http://192.168.244.2:4000/monhoc/addmh',{
      method:"POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(monhoc)
    })
    .then((response) => response.json())
      .then((res) => {
        if (res.success === true) {
            alert(res.message);
            this.setState({isLoading: false});
        }
        else {
          alert(res.message);
          this.setState({isLoading: false});
        }
      })
    }
    })
  }
  /*------- Back --------------------------------------------------------*/
   onPressBack = ()=>{
      this.props.navigation.navigate('Home');
    }
  /*--------Constructors ------------------------------------------------*/
    constructor(props)
    {
      super(props);
      this.state={
        Mamon:'',
        Tenmon:'',
        is_Loading:false,
      }
    }
    
    /* --------------------------Thiết kế màn hình --------------------------*/
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
					placeholder='   Mã môn'
					placeholderTextColor="#cdcdcd"
                    onChangeText={(Mamon) => this.setState({Mamon})}
                    value={this.state.Mamon}				
				/>
				<TextInput
					style={styles.StudentInput}
					placeholder='   Tên môn'
					placeholderTextColor="#cdcdcd"
                    onChangeText={(Tenmon) => this.setState({Tenmon})}	
                    value={this.state.Tenmon}			
				/>
        
        <View style={styles.ButtonLogin}>
            <TouchableOpacity style={styles.btnLuu} >
            <Button  title="Lưu môn học" color="#1e1e1e8b" onPress= {()=> this.onPressAddSubject()}></Button>
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

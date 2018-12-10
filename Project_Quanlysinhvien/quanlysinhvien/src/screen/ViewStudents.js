
import React,{Component} from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions }from 'react-navigation'; 
import {ActivityIndicator,Platform,Dimensions,Image, StyleSheet,FlatList, Text, View,TouchableOpacity , Button , TextInput} from 'react-native';
import Students from './Students';

 export default class ViewStudents extends React.Component {
  static navigationOptions = ({ navigation }) => {
		return {
		  title: navigation.getParam('otherParam', 'Danh Sách Sinh Viên'),
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
      this.state ={ 
        Hoten:'',
        Masinhvien:'',
        Ngaysinh:'',
        Gioitinh:'',
        Diachi:'',
        Khoa:'',
        Lop:'',
        Khoahoc:'',
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
      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }

    return (
          <View style={{ flex: 1 }}>
              <View style={{ flex: 1 }}>
                <View style={[styles.flexdong]}>

                  <TouchableOpacity style={styles.btnLeft} >
                    <Button title=" Quay lại " color="#e71a5f4a" onPress={() => this.onPressBack()}></Button>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.btnRight} >
                    <Button title=" Thêm mới " color="#e71a5f4a" onPress={() => this.onPressAdd()}></Button>
                  </TouchableOpacity>
                </View>
              </View>
            <View style={{ flex: 9}}>
            <View>
                <Image
                style={{
                    position: 'absolute',
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                }}
                source={require('./Image/background-2.jpg')}
                />
                <FlatList
                      style={styles.container1}
                      data={this.state.dataSource}
                      renderItem={({item}) => <Students Hoten = {item.hoten} Masinhvien = {item.masinhvien} Ngaysinh = {item.ngaysinh}  Gioitinh = {item.gioitinh} Diachi = {item.diachi}  Khoa = {item.khoa} Lop = {item.lop} Khoahoc = {item.khoahoc}/>}
                      keyExtractor={(item, index) => index.toString()}
                    />
              </View>
            </View>
          </View>
      );
  }
}


const styles = StyleSheet.create({
    
      tieude: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '800',
        color: 'red',
        top:30,
      },
      flexdong: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 0,
        paddingBottom: 0,
        justifyContent:'space-around'
      },
      khoangcach: {
    
      },
      input: {
        borderColor: '#C7CBD1',
        borderLeftColor: '#C7CBD1',
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        color: 'black',
        width: '80%',
        height: 40,
        fontSize: 16,
        color: 'black',
        justifyContent: 'space-around',
      },
      text: {
        borderColor: '#C7CBD1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingTop: 10,
        margin: 0,
        fontSize: 16,
        color: 'black',
        width: '40%',
        height: 40,
        textAlign: 'center',
        justifyContent: 'space-around',
      },
      btnLeft: {
        height: 25,
        textAlign: 'left',
        top:15,
        
      },
      btnRight: {
        height: 25,
        textAlign: 'right',
        top:15,
      },
    });
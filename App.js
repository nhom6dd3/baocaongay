import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import Login from './Login';
import Sign from './Sign';
import ViewStudents from './ViewStudents';
import AddStudents from './AddStudents';
import AddTeacher from './AddTeacher';
import ViewTeacher from './ViewTeacher';
import Home from './Home';

const RootStack = createStackNavigator(
  {
    Login: Login,
    Sign: Sign,
	Home: Home,
	Themsv:AddStudents,	  
	  Themgv:AddTeacher,	  
	  Xemdsgv:ViewTeacher,	  
	  Xemdssv:ViewStudents,	
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
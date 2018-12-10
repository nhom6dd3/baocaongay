
import React from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions }from 'react-navigation'; // Version can be specified in package.json

import Login from './screen/Login';
import Sign from './screen/Sign';
import AddStudents from './screen/AddStudents';
import AddPoint from './screen/AddPoint';
import ViewPoint from './screen/ViewPoint';
import ViewStudents from './screen/ViewStudents';
import AddSubject from './screen/AddSubject';
import Home from './screen/Home';
import ViewSubject from './screen/ViewSubject';


export const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  Sign: {
    screen: Sign,
  },
  AddStudents: {
    screen: AddStudents,
  },
  AddPoint: {
    screen: AddPoint,
  },
  ViewPoint: {
    screen: ViewPoint,
  },
  ViewStudents: {
    screen: ViewStudents,
  },
  Home: {
    screen: Home,
  },
  AddSubject: {
    screen: AddSubject,
  },
  ViewSubject: {
    screen: ViewSubject,
  },
  
}, 
{
    initialRouteName: 'Login',
});

export default createAppContainer(AppNavigator);




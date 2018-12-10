import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

import Demo_Props_State from './Demo_Props_State';
import Demo_Flastlist from './Demo_Flastlist';
import Demo_Listview from './Demo_Listview';
import Demo_Sectionlist from './Demo_Sectionlist';
import Home from './Home';


const RootStack = createStackNavigator(
  {
    Demo_Props_State: Demo_Props_State, // Demo props với state .

    Demo_Flastlist : Demo_Flastlist, // Demo Flastlist.

    Demo_Listview : Demo_Listview, // Demo Listview.

    Demo_Sectionlist : Demo_Sectionlist, // Demo Listview.

    Home : Home ,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
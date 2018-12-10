import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import {Platform,Dimensions,Image, ListView,StyleSheet, Text, View , Button } from 'react-native';
export default class Demo_Listview extends React.Component {
  constructor(props)
    {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(['Dòng 1 ', 'Dòng 2 ']),
      };
    }
  render() {
    return(
      <View >
        <Text> List View </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}
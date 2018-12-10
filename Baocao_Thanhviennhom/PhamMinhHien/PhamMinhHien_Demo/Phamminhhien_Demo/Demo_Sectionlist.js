import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import {Platform,Image, SectionList,StyleSheet, Text, View , Button } from 'react-native';

export default class Demo_Sectionlist extends React.Component {
  render() {
    return(
      <View>
        <Text> Section List </Text>
        <SectionList
          sections={[
            {title: 'Khoa Công Nghệ Thông Tin', data: ['Devin']},
            {title: 'Khoa Tiếng Anh', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            ]}
            renderItem={({item}) => <Text >{item}</Text>}
            renderSectionHeader={({section}) => <Text style={styles.tieude}> {section.title}</Text>}
            keyExtractor={(item, index) => index}
        />
      </View>
      );
    }
  }
  const styles = StyleSheet.create({
    tieude:{
      color:'#ff096e',
      fontWeight:'900',
    }
  });
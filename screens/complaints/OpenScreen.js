import React from 'react';
import {SafeAreaView, View, Text, Alert, Button} from 'react-native';

export default class OpenScreen extends React.Component{
  static navigationOptions = {
    title: 'Open Complaints',
    headerStyle: {
      color: (170,170,170),
    },
    headerTintColor: '#00000',
    headerTitleStyle: {
      flex:1,
      justifyContent:'center',
      textAlign:'center',
      fontWeight:'bold',
    },
    headerLeft: () => (
      <Button
        title='|||'
        onPress={()=> Alert.alert("Alert", "This is an alert")}
      />
    ),
    headerRight: () => (
      <Text>    </Text>
    ),
  };
  render(){
    return(
      <SafeAreaView>
        <Text>No complaints</Text>
        <Button title='Go Back' onPress={() => this.props.navigation.navigate('Home')}/>
      </SafeAreaView>
    )
  }
}
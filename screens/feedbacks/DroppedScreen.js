import React from 'react'
import {SafeAreaView, View, Text, Button, Alert, StyleSheet} from 'react-native'

export default class DroppedScreen extends React.Component{
  static navigationOptions = {
    title: 'Dropped Complaints',
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
        <Text>No Complaints</Text>
        <Button title='Go Back' onPress={() => this.props.navigation.navigate('Home')}/>
      </SafeAreaView>
    )
  }
}
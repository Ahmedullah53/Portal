import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container:{
    flex:4,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:4,
    borderColor:'Teal'
  }
})

export default class SplashScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Splash Screen</Text>
      </View>
    )
  }
}

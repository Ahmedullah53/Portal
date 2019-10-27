import React from 'react';
import {Text, TextInput, View, KeyboardAvoidingView, Button, SafeAreaView, StyleSheet, Dimensions} from 'react-native';

export default class Login extends React.Component{
  state = {
    username:"",
    password:"",
  }

  handleUsername = e => {
    this.setState({username: e.target.value})
  }

  handlePassword = e => {
    this.setState({password: e.target.value})
  }

  render(){
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.mainContainer}>
      <SafeAreaView>
        <View style={styles.container}>
          <TextInput style={[styles.textfields]} type="username" onChange={this.handleUsername} placeholder="Username"/>
          <TextInput style={[styles.textfields]} type="password" onChange={this.handlePassword} placeholder="Password"/>
          <View style={styles.btn}>
            <Button title="Sign in"/>
          </View>
          <View>
            <Button title="Register"/>
          </View>
        </View>
      </SafeAreaView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    justifyContent:'center',
  },
  container:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
    marginLeft:Dimensions.get('window').width * 0.1,
    marginRight:Dimensions.get('window').width * 0.1,
    backgroundColor:'#ffffff'
  },
  textfields:{
    marginBottom:10,
    borderWidth:1,
    fontSize:18,
    padding:5,
    borderRadius: 5,
  },
  btn:{
    marginBottom:10,
  }
})
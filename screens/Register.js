import React from 'react';
import {Text, TextInput, Picker, View, KeyboardAvoidingView, Button, ScrollView, StyleSheet, Dimensions} from 'react-native';
import Constants from 'expo-constants';

export default class Login extends React.Component{
  state = {
    name:"",
    password:"",
    confirmPassword:"",
    gender: "",
    nic:"",
    email:"",
    contact:"",
    date:"",
    address:""
  }

  handleNIC = e => {
    this.setState({nic: e.target.value})
  }

  handleName = e => {
    this.setState({name: e.target.value})
  }

  handlePassword = e => {
    this.setState({password: e.target.value})
  }

  handleConfirmPassword = e => {
    this.setState({password: e.target.value})
  }

  handleEmail = e => {
    this.setState({email: e.target.value})
  }

  handleContact = e => {
    this.setState({contact: e.target.value})
  }

  handleDate = e => {
    this.setState({date: e.target.value})
  }

  handleAddress = e => {
    this.setState({address: e.target.value})
  }

  render(){
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.mainContainer}>
        <ScrollView>
        <View style={styles.container}>
          <TextInput style={[styles.textfields]} type="off" onChange={this.handleNIC} placeholder="XXXXX-XXXXXXX-X"/>
          <TextInput style={[styles.textfields]} type="name" onChange={this.handleName} placeholder="Name"/>
          <TextInput style={[styles.textfields]} type="email" onChange={this.handleEmail} placeholder="Email"/>
          <Picker
            selectedValue={this.state.gender}
            style={[styles.textfields, {borderWidth:0}]}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({gender: itemValue})
            }>
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Others" value="others" />
          </Picker>
          <TextInput style={[styles.textfields]} type="tel" onChange={this.handleContact} placeholder="Contact No"/>
          <TextInput style={[styles.textfields]} type="off" onChange={this.handleDate} placeholder="dd-mm-yyyy"/>
          <TextInput style={[styles.textfields]} type="street-address" onChange={this.handleAddress} placeholder="Address"/>
          <TextInput style={[styles.textfields]} type="password" onChange={this.handlePassword} placeholder="Password"/>
          <TextInput style={[styles.textfields]} type="password" onChange={this.handleConfirmPassword} placeholder="Confirm Password"/>
          <View>
            <Button title="Register"/>
          </View>
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer:{
    paddingTop: Constants.statusBarHeight + 5,
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
    borderWidth:0.5,
    fontSize:18,
    padding:5,
    borderRadius: 5,
  },
  btn:{
    marginBottom:10,
  }
})
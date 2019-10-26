import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, Image, View, Dimensions} from 'react-native';
import Constants from 'expo-constants';

export default class ButtonFull extends React.Component {
	render() {
		const { bgcolor, fgcolor, count, text, onPress} = this.props;
		return (
      <TouchableOpacity style={[styles.buttonStyle, {borderColor:bgcolor, backgroundColor:bgcolor}]} onPress={() => onPress()}>
        <Text style={[styles.numStyle, {color:fgcolor}]}>{count}</Text>
		    <View style={styles.span}>
          <Text style={[styles.textStyle, {color:fgcolor}]}>{text}</Text>
          <Image style={styles.image} source={require('@expo/snack-static/react-native-logo.png')}/>
        </View>
      </TouchableOpacity>
		);
	}
}

ButtonFull.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  numStyle: {
    fontSize:50,
    color: '#000000',
  },
  textStyle: {
    width:Dimensions.get('window').width * 0.65,
    fontSize:17,
    // fontWeight:600,
    color: '#000000',
    marginTop:10,
  },
  span:{
    flex:1,
    flexDirection:"row",
    paddingBottom:3,
  },
  image:{
    width:40,
    height:40,
    marginLeft:50,
  },
  buttonStyle: {
    width:Dimensions.get('window').width - 10,
    borderWidth: 5,
    paddingLeft:8,
    borderRadius:5,
  }
});

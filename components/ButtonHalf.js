import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, Image, View, Dimensions} from 'react-native';
import Constants from 'expo-constants';

export default class ButtonHalf extends React.Component {
	render() {
		const { bgcolor, fgcolor, count, text, icon, onPress} = this.props;
		return (
      <TouchableOpacity style={[styles.buttonStyle, {backgroundColor:bgcolor, borderColor:bgcolor}]} onPress={() => onPress()}>
        <Text style={[styles.numStyle, {color:fgcolor}]}>{count}</Text>
		    <View style={styles.span}>
          <Text style={[styles.textStyle, {color:fgcolor}]}>{text}</Text>
          <Image style={styles.image} source={require('@expo/snack-static/react-native-logo.png')}/>
        </View>
      </TouchableOpacity>
		);
	}
}

ButtonHalf.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  numStyle: {
    fontSize:50,
    color: '#000000',
  },
  textStyle: {
    width:(Dimensions.get('window').width/2) * 0.6,
    fontSize:15,
    // fontWeight:600,
    color: '#000000',
  },
  span:{
    flex:1,
    flexDirection:"row",
    paddingBottom:3,
  },
  image:{
    width:40,
    height:40,
    marginLeft:4,
  },
  buttonStyle: {
    width:Dimensions.get('window').width/2 -9,
    borderWidth:1,
    paddingLeft:8,
    paddingRight:6,
    borderRadius:5,
    borderColor: (170,170,170)
  }
});

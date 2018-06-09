import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import {StyleSheet, View, Text} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.letters}>Sign In</Text>
        </View>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text: {
    width: DEVICE_WIDTH - 40,
    height: 40,
    backgroundColor: '#F98200',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'  
  },
  letters: {
    color: 'white'
  }
});
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import logoImg from '../images/logo.png';
import loading from '../images/loading.gif';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logoImg} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 172,
    height: 120,
  }
});
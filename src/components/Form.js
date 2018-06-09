import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import Input from './Input';
import loading from '../images/loading.gif';
import user from '../images/user.png';
import password from '../images/password.png';

export default class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Input
          source={user}
          placeholder="Username"
        />
        <Input
          source={password}
          secure={true}
          placeholder="Password"
        />
      </KeyboardAvoidingView>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});
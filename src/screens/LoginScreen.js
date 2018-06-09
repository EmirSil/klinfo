import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
import Wallpaper from '../components/Wallpaper';
import Logo from '../components/Logo';
import loading from '../images/loading.gif';
import Form from '../components/Form';
import Button from '../components/Button';
import SignupSection from '../components/SignupSection';

export default class LoginScreen extends Component {
  render() {
    return (
      <Wallpaper>
        <Logo />
        <Form />
        <Button />
        <SignupSection />
      </Wallpaper>
    );
  }
}
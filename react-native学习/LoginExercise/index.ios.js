/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';

var LoginView = require('./loginView');

class LoginExercise extends Component {
  render() {
    return (
        <View style={styles.container}>
          <LoginView/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('LoginExercise', () => LoginExercise);

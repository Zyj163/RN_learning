/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//tabbar: nmp i react-native-tab-navigator --save
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var YJMain = require('./Component/Main/YJMain');

class BusinessExercise extends Component {
  render() {
    return (
      <YJMain />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('BusinessExercise', () => BusinessExercise);

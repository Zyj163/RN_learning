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
  View
} from 'react-native';

var YJMain = require('./Component/YJMain');

var SlideMenu = require('./Component/SlideMenu');

class newsDemo extends Component {
  render() {
    return (
      //<YJMain />
        <SlideMenu

        />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('newsDemo', () => newsDemo);

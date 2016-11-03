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
  Navigator
} from 'react-native';

var YJMain = require('../Component/Main/YJMain');

var Launch = React.createClass({
  render() {
    return (
        <Image source={{uri: ''}} style={styles.launchStyle}/>
    )
  },

  componentDidMount() {
    setTimeout(()=>{
      this.props.navigator.replace({
        name: '首页',
        component: YJMain
      })
    }, 1500)
  }
});

class BusinessExercise extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{name: '启动页', component: Launch}}
            configureScene={(route, navigator)=>{
              let Component = route.component;
              return <Component {...route.passProps} navigator={navigator}/>;
            }}
        />
    );
  }
}

const styles = StyleSheet.create({
  launchStyle: {
    flex: 1
  }
});

AppRegistry.registerComponent('BusinessExercise', () => BusinessExercise);

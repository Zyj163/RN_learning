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
  TextInput
} from 'react-native';

//引入
var Dimensions = require('Dimensions');

class Helloword extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
          当前屏幕的宽度:{Dimensions.get('window').width}
        </Text>
        {/*加载图片需要指定宽高*/}
        <Image source={{uri: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}} style={styles.imageLayout}/>
        {/*
        加载代码文件夹中某处的图片
        <Image source={require('./my-icon.png')} />

        也可以使用已经打包到App中的图片资源
        <Image source={{uri: 'app_icon'}} style={{width: 40, height: 40}} />
        */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //改变主轴方向
    //flexDirection: 'row',
    //默认是纵向
    flexDirection: 'column',
    //在父视图中(主轴)所占的比例
    flex: 1,
    //设置主轴的对齐方式 flex-start、center、flex-end、space-around以及space-between
    justifyContent: 'center',
    //设置侧轴对齐方式 flex-start、center、flex-end以及stretch
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    //设置换行,默认不换行
    flexWrap: 'wrap'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    //override父控件的alignItems
    alignSelf: "flex-start",
    //相当于clear
    backgroundColor:'transparent'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  imageLayout: {
    width: 100,
    height: 100,
    //设置圆角
    borderRadius: 50,
    borderColor: 'red',
    borderWidth: 2,
    //设置图片的内容模式 cover contain stretch
    resizeMode: 'cover'
  }
});

//导入json数据
var badgeData = require('./BadgeData.json');

var Dimensions = require('Dimensions');
var {width} = dimensions.get('window').width;

var cols = 3;
var boxW = 100;
var vMargin = (width - cols * boxW) / (cols + 1);
var hMargin = 25;

class ImageExercise extends component {
  render() {
    return (
      <View style={imageStyles.container}>
        {this.renderAllBadge()}
      </View>
    );
  }

  renderAllBadge() {
    var allBadges = [];
    for (var i=0; i<badgeData.data.length; i++) {
      var badge = badgeData.data[i];
      //添加到数组
      allBadges.push(
          <View key={i} style={imageStyles.outViewStyle}>
            <Image source={{uri: badge.icon}} style={imageStyles.iconStyle} />
            <Text style={imageStyles.nameStyle}>
              {badge.title}
            </Text>
          </View>
      );
    }
    return allBadges;
  }
}

const imageStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  outViewStyle: {
    backgroundColor: 'gray',
    alignItems: 'center'
  },
  iconStyle: {
    width: boxW,
    height: boxW,
    marginLeft: vMargin,
    marginTop: hMargin
  },
  nameStyle: {
    fontSize: 20
  }
});

class TextInputDemo extends component {
  render() {
    return (
        <View style={textInputStyles.container}>
          <TextInput style={textInputStyles.inputStyle} />
        </View>
    );
  }
}

const textInputStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },
  inputStyle: {
    width: 300,
    height: 60,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e8e8e8',
    value: '默认文字',
    keyboardType: 'number-pad',
    multiline: true,//输入多行
    letterSpacing: 2,//字间距
    //password: true,//和multiline不兼容
    placeholder: '占位文字',
    clearButtonMode: 'always'
  }
});

AppRegistry.registerComponent('TextInputDemo', () => TextInputDemo);

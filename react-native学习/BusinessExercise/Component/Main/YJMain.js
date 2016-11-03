import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform, //用来判断当前运行的系统(ios/android)
    Navigator,
    Image
} from 'react-native';

var YJHome = require('../Home/YJHome');
var YJShop = require('../Shop/YJShop');
var YJMine = require('../Mine/YJMine');
var YJMore = require('../More/YJMore');

var YJMain = React.createClass({

    //这里定义的属性可以通过外部传递
    getInitialState() {
        return {
            selectedTab: '首页'
        }
    },

    render() {
        return (
            <TabNavigator>
                {this.generateTabItem("首页", "tabbar_home", "tabbar_home_highlighted", YJHome)}
                {this.generateTabItem("商店", "tabbar_message_center", "tabbar_message_center_highlighted", YJShop)}
                {this.generateTabItem("我的", "tabbar_profile", "tabbar_profile_highlighted", YJMine)}
                {this.generateTabItem("更多", "tabbar_discover", "tabbar_discover_highlighted", YJMore)}
            </TabNavigator>
        );
    },

    generateTabItem(title, icon, selectedIcon, component) {
       return(
           <TabNavigator.Item
            selected={this.state.selectedTab === title}
            title={title}
            renderIcon={() => <Image source={{uri: icon}} style={styles.tabItemIconStyle} />}
            renderSelectedIcon={() => <Image source={{uri: selectedIcon}} style={styles.tabItemIconStyle} />}
            selectedTitleStyle={{color: 'orange'}}
            onPress={() => this.setState({ selectedTab: title })}
           >
               <Navigator
                   initialRoute={{name: title, component: component}}
                   configureScene={()=>{
                        return Navigator.SceneConfigs.PushFromRight
                   }}
                   renderScene={(route, navigator)=>{
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator}/>;
                   }}
                   />
           </TabNavigator.Item>
       );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    tabItemIconStyle: {
        width: Platform.OS === 'ios' ? 30 : 20,
        height: Platform.OS === 'ios' ? 30 : 20
    }
});

module.exports = YJMain;

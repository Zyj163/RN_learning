import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';

var YJHome = require('../Component/YJHome');
var YJFind = require('../Component/YJFind');
var YJMessage = require('../Component/YJMessage');
var YJMine = require('../Component/YJMine');

class YJMain extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedItem: 'home'
        };
    }

    render() {
        return (
            <View style={styles.container}>

               <TabBarIOS tintColor="orange">

                   <TabBarIOS.Item icon={require('image!tabbar_home')}
                                   title="首页"

                                   selected={this.state.selectedItem == 'home'}
                                   onPress={()=>this.setState({selectedItem:'home'})}
                   >
                       <NavigatorIOS
                           initialRoute={{
                               component: YJHome,
                               title: '首页',
                               leftButtonIcon: require('image!navigationbar_friendattention'),
                               rightButtonIcon: require('image!navigationbar_pop')
                           }}
                           tintColor='orange'
                           style={styles.navigatorStyle}
                       />
                   </TabBarIOS.Item>

                   <TabBarIOS.Item icon={require('image!tabbar_discover')}
                                   title="发现"

                                   selected={this.state.selectedItem == 'discover'}
                                   onPress={()=>this.setState({selectedItem:'discover'})}
                   >
                       <NavigatorIOS
                           initialRoute={{
                               component: YJFind,
                               title: '发现'
                           }}
                       />
                   </TabBarIOS.Item>

                   <TabBarIOS.Item icon={require('image!tabbar_message_center')}
                                   title="消息"

                                   selected={this.state.selectedItem == 'message_center'}
                                   onPress={()=>this.setState({selectedItem:'message_center'})}
                   >
                       <NavigatorIOS
                           initialRoute={{
                               component: YJMessage,
                               title: '消息'
                           }}
                       />
                   </TabBarIOS.Item>

                   <TabBarIOS.Item icon={require('image!tabbar_profile')}
                                   title="我的"

                                   selected={this.state.selectedItem == 'profile'}
                                   onPress={()=>this.setState({selectedItem:'profile'})}
                   >
                       <NavigatorIOS
                           initialRoute={{
                               component: YJMine,
                               title: '我的'
                           }}
                       />
                   </TabBarIOS.Item>

               </TabBarIOS>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    commonViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    navigatorStyle: {
        flex: 1
    }
});

module.exports = YJMain;

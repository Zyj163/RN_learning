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
    TabBarIOS
} from 'react-native';

class TabBarIOSExercise extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedItem: 'first'
        };
      }

    render() {
        return (
            <View style={styles.container}>

                <TabBarIOS style={styles.tabbarStyle}
                           barTintColor='black'//tabbar的颜色
                           tintColor="orange"//item选中的颜色
                >
                     <TabBarIOS.Item systemIcon="contacts"
                                     badge="3"
                                     selected={this.state.selectedItem == 'first'}
                                     onPress={()=>{this.setState({selectedItem:'first'})}}
                     >
                         <View style={styles.commonViewStyle}>
                             <Text>联系人</Text>
                         </View>
                     </TabBarIOS.Item>

                     <TabBarIOS.Item systemIcon="favorites"
                                     selected={this.state.selectedItem == 'second'}
                                     onPress={()=>{this.setState({selectedItem:'second'})}}
                     >
                         <View style={styles.commonViewStyle}>
                             <Text>喜欢</Text>
                         </View>
                     </TabBarIOS.Item>

                     <TabBarIOS.Item systemIcon="recents"
                                     selected={this.state.selectedItem == 'third'}
                                     onPress={()=>{this.setState({selectedItem:'third'})}}
                     >
                         <View style={styles.commonViewStyle}>
                             <Text>最近</Text>
                         </View>
                     </TabBarIOS.Item>

                     <TabBarIOS.Item systemIcon="history"
                                     selected={this.state.selectedItem == 'forth'}
                                     onPress={()=>{this.setState({selectedItem:'forth'})}}
                     >
                         <View style={styles.commonViewStyle}>
                             <Text>历史</Text>
                         </View>
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
    tabbarStyle: {

    },
    commonViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

AppRegistry.registerComponent('TabBarIOSExercise', () => TabBarIOSExercise);

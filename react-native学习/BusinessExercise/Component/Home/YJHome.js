import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ListView
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var YJHome = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
            </View>
        );
    },

    renderNavBar() {
        return(
            <View style={styles.navBarStyle}>
                <View style={styles.navBarContentStyle}>
                    <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=>this.clickOnLeftItem()}
                    >
                        <Text style={styles.leftItemStyle}>城市</Text>
                    </TouchableOpacity>

                    <TextInput
                        style={styles.searchStyle}
                        placeholder="请输入要搜索的内容"
                        onFocus={()=>this.clickOnSearch}
                    />

                    <View style={styles.rightItemsViewStyle}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={()=>this.clickOnMessage()}
                        >
                            <Image
                                source={{uri: 'navigationbar_friendattention'}}
                                style={styles.navBarIconStyle}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={()=>this.clickOnCoder()}
                        >
                            <Image
                                source={{uri: 'navigationbar_pop'}}
                                style={styles.navBarIconStyle}
                            />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    },

    clickOnLeftItem() {
        alert('clickOnLeftItem')
    },
    clickOnSearch(event: Object) {
        //this.push(YJHome, '搜索')
        var searchTerm = event.nativeEvent.text.toLowerCase();
        var queryUrl = "https://api.github.com/search/repositories?q='" + encodeURIComponent(searchTerm);
        fetch(queryUrl)
            .then((response) => response.json())
            .then((responseData) => {
                alert(responseData);
            })
            .done();
    },

    clickOnMessage() {
        alert('clickOnMessage')
    },
    clickOnCoder() {
        alert('clickOnCoder')
    },

    push(component, title) {
        this.props.navigator.push({
            component: component,
            title: title
        })
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    navBarStyle: {
        backgroundColor: 'rgb(255, 96, 0)',
        height: 64
    },
    navBarContentStyle: {
        height: 44,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: width
    },

    leftItemStyle: {
        color: 'white',
        marginLeft: 5
    },

    searchStyle: {
        borderRadius: 5,
        height: 30,
        backgroundColor: 'white',
        paddingLeft: 5,
        marginLeft: 5,
        flex: 1,
        alignSelf: 'center',
        fontSize: 14
    },

    rightItemsViewStyle: {
        flexDirection: 'row'
    },
    navBarIconStyle: {
        width: 30,
        height: 30,
        margin: 5
    }
});

module.exports = YJHome;

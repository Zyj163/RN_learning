import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var YYCommonCell = React.createClass({

    getInitialState() {
        return {
            title: ''
        }
    },

    render() {
        return (
            <TouchableOpacity onPress={()=>this.clickOn()}>
                <View style={styles.contentViewStyle}>
                    <Text style={styles.mainTitleStyle}>{this.props.title}</Text>
                    <Image source={{uri: ''}} style={styles.rightImageStyle}/>
                </View>
            </TouchableOpacity>
        );
    },
    clickOn() {
        alert('...')
    }
});

const styles = StyleSheet.create({
    contentViewStyle: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 44,
        backgroundColor: 'white',
        borderBottomColor: '#ddd',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        paddingLeft: 8,
        paddingRight: 8
    },
    mainTitleStyle: {
        fontSize: 16
    },
    rightImageStyle: {
        width: 8,
        height: 13
    }
});

module.exports = YYCommonCell;

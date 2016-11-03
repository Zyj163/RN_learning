'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

var LeftComponent = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Left</Text>
            </View>
        )
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

module.exports = LeftComponent;
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

var YJCommonCell = require('./YJCommonCell');

class YJMore extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.listViewStyle}>
                    <View style={styles.sectionStyle}>
                        <YJCommonCell title="扫一扫"/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listViewStyle: {
        backgroundColor: '#ddd'
    },
    sectionStyle: {
        marginTop: 10
    }
});

module.exports = YJMore;

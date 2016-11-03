import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class YJMine extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    mine
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
});

module.exports = YJMine;

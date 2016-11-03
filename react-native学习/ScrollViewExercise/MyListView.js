import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
} from 'react-native';

var Dimensions=require('Dimensions');
var {width, height}=Dimensions.get('window');

var MyListView = React.createClass({

    getInitialState() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(['row1', 'row2', 'row3', 'row4', 'row1', 'row2', 'row3', 'row4'])
        }
    },

    render() {
        return (
            <View style={styles.container}>
                <ListView dataSource={this.state.dataSource}
                          renderRow={this.renderRow}

                          contentContainerStyle={styles.listViewStyle}
                          />
            </View>
        );
    },

    renderRow(rowData, sectionID, rowID) {
        return (
            <TouchableOpacity onPress={()=>this.clickOn(sectionID, rowID)} activeOpacity={0.5} style={styles.cellStyle}>
                <View style={styles.iconViewStyle}></View>
                <Text>{rowData}</Text>
            </TouchableOpacity>
        )
    },

    clickOn(sectionID, rowID) {
        alert(rowID)
    }
});

const styles = StyleSheet.create({
    container: {
        height: height - 200 - 22
    },
    iconViewStyle: {
        backgroundColor: 'green',
        width: 80,
        height: 80
    },
    listViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    cellStyle: {
        margin: 60,
        alignItems: 'center',
        backgroundColor: 'white',
        height: 100
    }
});

module.exports = MyListView;

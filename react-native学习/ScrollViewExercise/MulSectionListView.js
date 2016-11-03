import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity
} from 'react-native';

var MulSectionListView = React.createClass({

    getInitialState() {
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };

        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };

        return {
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,
                getRowData: getRowData,
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            })
        };
    },

    render() {
        return (
            <View style={styles.container}>
                <ListView dataSource={this.state.dataSource}
                          renderRow={this.renderRow}
                          renderSectionHeader={this.renderSectionHeader}
                          />
            </View>
        );
    },

    renderRow(rowData) {
        return (
            <TouchableOpacity activeOpacity={0.5}>

            </TouchableOpacity>
        )
    },

    renderSectionHeader(sectionData, sectionID) {
        return (
            <View>

            </View>
        )
    },

    //做一些复杂的操作(数据请求,异步操作,定时器等)
    componentDidMount() {
        var dataBlob = {},
            sectionIDs = [],
            rowIDs = [];

        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        });
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF'
    }
});

module.exports = MulSectionListView;

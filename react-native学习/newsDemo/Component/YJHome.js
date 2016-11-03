import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var YJAutoScrollView = require('../Component/YJAutoScrollView');
var YJNewsDetail = require('../Component/YJNewsDetail');

var YJHome = React.createClass({

    getDefaultProps() {
        return {
            url_api: 'http://c.3g.163.com/nc/article/headline/T1348647853363/0-20.html?from=toutiao&fn=2&prog=&passport=&devId=o4JM9C5aBG3ptw%2Bg9NTpOkgaccZRjUCfvQxkz2trdbpkE90xzZzKlH1Sh%2Bl%2Bwi0t&offset=0&size=20&version=14.0&spever=false&net=wifi&lat=&lon=&ts=1470302074&sign=Nakxtq5GEncthZ1F34MMmiKRsFBG7kPwUNIEr6qZpCx48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore',
            key_word: 'T1348647853363'
        }
    },

    getInitialState() {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            headerDataSource: []
        }
    },

    //// 构造
    //constructor(props) {
    //    super(props);
    //    // 初始状态
    //    this.state = {
    //        dataSource: new ListView.DataSource({
    //            rowHasChanged: (r1, r2) => r1 !== r2
    //        }),
    //        headerDataSource: []//不好使!!!!!
    //    };
    //}

    render() {
        return (
            <ListView dataSource={this.state.dataSource}
                      renderRow={this.renderRow}
                      renderHeader={this.renderHeader}
            />
        );
    },

    //请求网络数据
    componentDidMount() {
        this.loadDataFromNet();
    },

    loadDataFromNet() {
        fetch(this.props.url_api)
            .then((response) => response.json())
            .then((responseJson) => {
                this.dealWithJsonObj(responseJson);
            })
            .catch((error) => {
                alert(error)
            })
    },

    dealWithJsonObj(jsonObj) {
        var jsonData = jsonObj[this.props.key_word];
        var headerArr = [], listArr = [];

        for(var i=0; i<jsonData.length; i++) {
            var data = jsonData[i];
            if (data.hasAD == 1) {
                //头部数据
                headerArr = data.ads;
            }else {
                //列表数据
                listArr.push(data);
            }
        }

        this.setState({
            headerDataSource: headerArr,
            dataSource: this.state.dataSource.cloneWithRows(listArr)
        });
    },

    renderRow(rowData) {
        return (
            <TouchableOpacity activeOpacity={0.5}
                              style={styles.cellStyle}
                              onPress={()=>{this.pushDetail(rowData)}}
            >
                <View style={styles.contentViewStyle}>
                    <Image style={styles.leftImageStyle}
                         source={{uri: rowData.imgsrc}}
                    />
                    <View style={styles.rightViewStyle}>
                         <Text style={styles.mainTitleStyle}
                               numberOfLines={2}
                         >
                             {rowData.title}
                         </Text>
                         <Text style={styles.subTitleStyle}
                               numberOfLines={2}
                         >
                             {rowData.digest}
                         </Text>
                         <Text style={styles.flowTitleStyle}>{rowData.replyCount}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },

    renderHeader() {
        if (this.state.headerDataSource.length == 0) return;
        return(
            <YJAutoScrollView dataArr={this.state.headerDataSource}/>
        )
    },

    pushDetail(rowData) {
        this.props.navigator.push({
            component: YJNewsDetail,
            title: rowData.title,
            passProps: {rowData}
        })
    }
});

//YJHome.defaultProps={
//    url_api: 'http://c.3g.163.com/nc/article/headline/T1348647853363/0-20.html?from=toutiao&fn=2&prog=&passport=&devId=o4JM9C5aBG3ptw%2Bg9NTpOkgaccZRjUCfvQxkz2trdbpkE90xzZzKlH1Sh%2Bl%2Bwi0t&offset=0&size=20&version=14.0&spever=false&net=wifi&lat=&lon=&ts=1470302074&sign=Nakxtq5GEncthZ1F34MMmiKRsFBG7kPwUNIEr6qZpCx48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore',
//    key_word: 'T1348647853363'
//};

const styles = StyleSheet.create({
    contentViewStyle: {
        margin: 8,
        flexDirection: 'row'
    },
    cellStyle: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0,0,0,0.2)'
    },
    leftImageStyle: {
        width: 80,
        height: 80,
        borderRadius: 5
    },
    rightViewStyle: {
        width: width - 80 - 8,
        paddingRight: 8,
        paddingLeft: 8
    },
    mainTitleStyle: {
        flexWrap: 'wrap',
        fontSize: 16
    },
    subTitleStyle: {
        flexWrap: 'wrap',
        marginTop: 5,
        fontSize: 13,
        color: 'gray'
    },
    flowTitleStyle: {
        position: 'absolute',
        bottom: -8,
        right: 8,
        fontSize: 10,
        color: 'gray'
    }
});

module.exports = YJHome;

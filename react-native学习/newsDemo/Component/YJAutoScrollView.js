/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//引入定时器, cd到当前项目, npm i react-timer-mixin --save
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var TimerMixin = require('react-timer-mixin');

var YJAutoScrollView = React.createClass({

    mixins: [TimerMixin],

    getDefaultProps() {
        return ({
            dataArr: []
        })
    },

    getInitialState() {
        return ({
            currentPage: 0,
            title: this.props.dataArr[0].title
        })
    },

    render() {
        return (
            <View style={{}}>
                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollViewStyle}
                    //contentContainerStyle={styles.contentContainer}
                    //当一帧滚动结束
                    onMomentumScrollEnd={(e)=>this.onScrollAnimationEnd(e)}
                    //开始拖拽
                    onScrollBeginDrag={this.onScrollBeginDrag}
                    //停止拖拽
                    onScrollEndDrag={this.onScrollEndDrag}
                >
                    {this.renderChildView()}
                </ScrollView>

                <View style={styles.pageViewStyle}>
                    <Text style={styles.titleStyle}>{this.props.dataArr[this.state.currentPage].title}</Text>
                    <View style={styles.indicatorViewStyle}>
                        {this.renderPageIndicator()}
                    </View>
                </View>
            </View>
        );
    },

    componentDidMount() {
        this.startTimer();
    },

    startTimer() {
        var scrollView = this.refs.scrollView;

        this.timer = this.setInterval(function() {

            var activePage = 0;

            if ((this.state.currentPage + 1) >= this.props.dataArr.length) {
                activePage = 0;
            }else {
                activePage = this.state.currentPage + 1;
            }

            var offsetX = activePage * width;
            scrollView.scrollResponderScrollTo({
                x: offsetX,
                y: 0,
                animated: true
            });

        }, 2000);

    },

    renderChildView() {
        var views = [];
        for (var i=0; i<this.props.dataArr.length; i++) {
            views.push(
                <Image key={i}
                       style={{width: width, height: 200}}
                       source={{uri: this.props.dataArr[i].imgsrc}}
                />
            )
        }
        return views;
    },

    renderPageIndicator() {
        var indicators = [];
        var style;
        for (var i=0; i<this.props.dataArr.length; i++) {
            style = (i==this.state.currentPage) ? {color: 'white'} : {color: 'gray'};
            indicators.push(
                <Text key={i} style={[styles.indicatorsStyle, style]}>&bull;</Text>
            );
        }
        return indicators;
    },

    onScrollAnimationEnd(e) {
        var currentX = e.nativeEvent.contentOffset.x;
        var currentPage = Math.floor(currentX / width);

        this.setState({
            currentPage: currentPage,
            title: this.props.dataArr[currentPage].title
        });
    },

    onScrollBeginDrag() {
        this.clearInterval(this.timer);
    },

    onScrollEndDrag() {
        this.startTimer();
    }
});

const styles = StyleSheet.create({
    pageViewStyle: {
        width: width,
        height: 30,
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        //top: 22 + 200 - 30,
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    indicatorViewStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    indicatorsStyle: {
        fontSize: 24,
        color: 'gray',
        marginRight: 5
    },
    titleStyle: {
        color: 'white',
        marginLeft: 5
    }
});

module.exports = YJAutoScrollView;

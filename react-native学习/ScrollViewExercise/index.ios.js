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
  ScrollView
} from 'react-native';

var Dimensions=require('Dimensions');
var {width, height}=Dimensions.get('window');

var TimerMixin = require('react-timer-mixin');

var MyListView = require('./MyListView');

var ScrollViewExercise = React.createClass({

    mixins: [TimerMixin],

    getDefaultProps() {
        return ({
            totalPage: 4
        })
    },

    getInitialState() {
        return ({
            currentPage: 0
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
                    {this.renderPageIndicator()}
                </View>

                <MyListView style={styles.listViewStyle}></MyListView>
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

            if ((this.state.currentPage + 1) >= this.props.totalPage) {
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
        var backgroundColors = ['red', 'green', 'yellow', 'blue'];
        for (var i=0; i<this.props.totalPage; i++) {
            views.push(
                <View key={i} style={{width: width, height: 200, backgroundColor: backgroundColors[i]}}></View>
            )
        }
        return views;
    },

    renderPageIndicator() {
        var indicators = [];
        var style;
        for (var i=0; i<this.props.totalPage; i++) {
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
            currentPage: currentPage
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
    //contentContainer: {
    //    padding: 10
    //},
    scrollViewStyle: {
        backgroundColor: 'black',
        marginTop: 22
    },
    pageViewStyle: {
        width: width,
        height: 30,
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        top: 22 + 200 - 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    indicatorsStyle: {
        fontSize: 24,
        color: 'gray',
        marginLeft: 8
    },
    listViewStyle: {
        //height: height - 200 - 22
    }
});

AppRegistry.registerComponent('ScrollViewExercise', () => ScrollViewExercise);

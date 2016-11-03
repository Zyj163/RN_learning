'use strict';

import React, { Component } from 'react';
import {
    LayoutAnimation,
    PanResponder,
    StyleSheet,
    View
} from 'react-native';

//var AnimationExperimental = require('AnimationExperimental');

var Dimensions = require('Dimensions');

var {screenWidth} = Dimensions.get('window');

//console.log(AnimationExperimental.startAnimation);

var SlideMenu = React.createClass({

//一个gestureState对象有如下的字段：
//
//stateID - 触摸状态的ID。在屏幕上有至少一个触摸点的情况下，这个ID会一直有效。
//moveX - 最近一次移动时的屏幕横坐标
//moveY - 最近一次移动时的屏幕纵坐标
//x0 - 当响应器产生时的屏幕坐标
//y0 - 当响应器产生时的屏幕坐标
//dx - 从触摸操作开始时的累计横向路程
//dy - 从触摸操作开始时的累计纵向路程
//vx - 当前的横向移动速度
//vy - 当前的纵向移动速度
//numberActiveTouches - 当前在屏幕上的有效触摸点的数量
    componentWillMount() {
        this.offset = 0;//center view的左边偏移默认为0
        this._panGesture = PanResponder.create({
            // 是否要求成为响应者(当横向位移大于纵向位移时centerView才可以移动)
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return Math.abs(gestureState.dx) > Math.abs(gestureState.dy)
                        && Math.abs(gestureState.dx) > 10;
            },
            // 开始手势操作
            onPanResponderGrant: (evt, gestureState) => this.left = 0,
            // 最近一次移动的距离为gestureState.move{X,Y}, 从成为响应者开始时的累计手势移动距离为gestureState.d{x, y}
            onPanResponderMove: (evt, gestureState) => this.moveCenterView(gestureState.dx),
            // 用户放开了所有的触摸点,且此时视图已经成为了响应者,即一个手势已经成功完成
            onPanResponderRelease: this.moveFinished,
            // 另一个组件已经成为了新的响应者,所以当前手势将被取消
            onPanResponderTerminate: this.moveFinished
        })
    },

    moveCenterView(left) {
        if(!this.center) return;
        if((this.offset + left) < 0) {
            this.left = -this.offset;
        } else {
            this.left = left;
        }
        this.center.setNativeProps({left: this.offset + this.left})
    },

    //当用户滑动打开屏幕宽度的1/4以上时,抬起手指后其余的部分将自动打开,当用户滑动关闭了屏幕宽度的一半以上时,抬起手指后其余部分将自动关闭
    moveFinished() {
        if (!this.center) return;
        var offset = this.offset + this.left;
        if (this.offset == 0) {
            if (offset > screenWidth * 0.25) {
                this.offset = screenWidth * 0.75;
            }
        } else {
            if (offset < screenWidth * 0.5) {
                this.offset = 0;
            }
        }
        //AnimationExperimental.startAnimation(this.center, 400, 0, 'easeInOut', {'anchorPoint.x': 0, 'position.x': this.offset});
        LayoutAnimation.configureNext(animations.layout.easeInEaseOut);
        this.center.setNativeProps({left: this.offset});
    },

    render() {
        var centerView = this.props.renderCenterView ? this.props.renderCenterView() : null;
        var leftView = this.props.renderLeftView ? this.props.renderLeftView() : null;
        return (
            <View style={[styles.container, this.props.style]}>
                <View style={styles.left}>
                    {leftView}
                </View>
                <View
                    style={[styles.center, {left: this.offset}]}
                    ref={(center) => this.center = center}
                    {...this._panGesture.panHandlers}
                >
                    {centerView}
                </View>
            </View>
        )
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    center: {
        flex: 1,
        backgroundColor: '#fff',

    },
    left: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#fff'
    }
});

var animations = {
    layout: {
        spring: {
            duration: 750,
            create: {
                duration: 300,
                type: LayoutAnimation.Types.easeInEaseOut,
                property: LayoutAnimation.Properties.opacity
            },
            update: {
                type: LayoutAnimation.Types.spring,
                springDamping: 400
            }
        },
        easeInEaseOut: {
            duration: 300,
            create: {
                type: LayoutAnimation.Types.easeInEaseOut,
                property: LayoutAnimation.Properties.scaleXY
            },
            update: {
                delay: 100,
                type: LayoutAnimation.Types.easeInEaseOut
            }
        }
    }
};

module.exports = SlideMenu;




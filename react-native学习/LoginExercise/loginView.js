import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

//ES5声明类
var LoginView = React.createClass({
//生命周期
    //声明不可变属性
    //getDefaultProps() {
    //
    //},

    //声明可变属性,通过this.setState改变
    getInitialState() {
        return {
            //当这里的属性发生改变后,会重新调用render(重绘)
            title: '不透明触摸'
        }
    },

    //属性校验器
    propTypes: {
        title: React.propTypes.string
    },

    //相当于viewWillAppear
    //componentWillMount() {
    //
    //},

    //渲染界面
    render() {
        return (
            <View style={loginStyles.container}>
                <Image source={{uri: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}}
                       style={loginStyles.iconStyle}
                />
                <TextInput placeholder='请输入用户名'
                           clearButtonMode='always'
                           style={loginStyles.inputStyle}
                />
                <TextInput placeholder="请输入密码"
                           clearButtonMode='always'
                           secureTextEntry={true}
                           style={loginStyles.inputStyle}
                />
                <TouchableOpacity style={loginStyles.touchStyle}
                                  activeOpacity={0.5}
                                  onPress={()=>this.clickOn('点击鼠标')}
                                  >
                    <View style={loginStyles.loginBtnStyle}>
                        {/*ref用于获取节点*/}
                        <Text ref="loginText" style={loginStyles.loginBtnTextStyle}>登录</Text>
                    </View>
                </TouchableOpacity>

                {
                    /*<TouchableOpacity activeOpacity={0.5}
                     onPress={()=>this.setState({title: '点击'})}
                     onPressIn={()=>{this.setState({title: '按下'})}}
                     onPressOut={()=>{this.setState({title: '弹起'})}}
                     onLongPress={()=>{this.setState({title: '长按'})}}
                     >
                     <View style={{backgroundColor:'red', width: 300, height: 50}}></View>
                     </TouchableOpacity>
                     <Text>{this.state.title}</Text>//改变state.title后,会重新调用render渲染,所以text会发生变化*/
                }
            </View>
        );
    },

    //相当于viewDidAppear
    //componentDidMount() {
    //
    //},

    clickOn(event) {
        alert(this.refs.loginText);
    }
});

//ES6声明类
//class LoginView extends Component {
//
//    // 构造 (getInitialState())
//      constructor(props) {
//        super(props);
//        // 初始状态
//        this.state = {};
//      }
//}
//LoginView.propTypes={
//    title: React.propTypes.bool
//};
//相当于getDefaultProps()
//LoginView.defaultProps={title:'123'};

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'center'
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: '#dddddd',
        height: 44,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingLeft: 10

    },
    iconStyle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        resizeMode: 'cover',
        borderWidth: 1,
        borderColor: '#ddd',
        marginTop: 100,
        marginBottom: 50
    },
    touchStyle: {
        alignSelf: 'stretch'
    },
    loginBtnStyle: {
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
        borderRadius: 8,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
    },
    loginBtnTextStyle: {
        color: 'white'
    }
});

module.exports = LoginView;

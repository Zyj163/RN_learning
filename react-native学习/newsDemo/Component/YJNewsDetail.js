import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

class YJNewsDetail extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            detailData: ''
        };
      }

    render() {
        return (
            <WebView
                automaticallyAdjustContentInsets={true}
                style={styles.webView}
                source={{html: this.state.detailData, baseUrl:''}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                decelerationRate="normal"
                startInLoadingState={true}
                scalesPageToFit={this.state.scalesPageToFit}
            />
        );
    }

    componentDidMount() {

        var url_api = 'http://c.3g.163.com/nc/article/' + this.props.rowData.docid + '/full.html';

        fetch(url_api)
            .then(response => response.json())
            .then(responseJson => {
                var allData = responseJson[this.props.rowData.docid];

                this.createHtml(allData)
            })
            .catch(error => {
                alert(error)
            })
    }

    createHtml(allData) {
        var bodyHtml = allData.body;

        if (allData.img.length > 0) {

            for (var i=0; i<allData.img.length; i++) {

                var img = allData.img[i];
                var imgsrc = img.src;

                var imgHtml = '<img src="'+imgsrc+'" width="100%">';

                bodyHtml = bodyHtml.replace(img.ref, imgHtml);
            }
        }

        this.setState({
            detailData: bodyHtml
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});

module.exports = YJNewsDetail;


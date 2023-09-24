import {View} from 'react-native';
import React, {Component} from 'react';

export default class TableBody extends Component {
    render() {
        return (
            <View testID={this.props.testID}>
                {this.props.children}
            </View>
        );
    }
}

import {View} from 'react-native';
import React, {Component} from 'react';
import Styles from '../../styles'

export default class Table extends Component {
    render() {
        return (
            <View style={[Styles.table]}>
                {this.props.children}
            </View>
        );
    }
}

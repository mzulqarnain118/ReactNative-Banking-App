import {View} from 'react-native';
import React, {Component} from 'react';
import Styles from '../../styles'

export default class TableRow extends Component {
    render() {
        return (
            <View style={[Styles.table_tbody_tr]} testID={this.props.testID}>
                {this.props.children}
            </View>
        );
    }
}

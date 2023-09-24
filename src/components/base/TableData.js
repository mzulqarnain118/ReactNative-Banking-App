import {View} from 'react-native';
import React, {Component} from 'react';
import Styles from '../../styles'
import {Text} from 'react-native-web';

export default class TableData extends Component {
    render() {
        return (
            <View style={[Styles.table_td, {flex : this.props.flex || 1}]}>
                <Text style={[Styles.table_tbody_tr_td]}>{this.props.children}</Text>
            </View>
        );
    }
}

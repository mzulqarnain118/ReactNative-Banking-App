import {View} from 'react-native';
import React, {Component} from 'react';
import Styles from '../../styles'
import {Text} from 'react-native-web';

export default class TableHeader extends Component {
    render() {
        return (
            <View style={[Styles.table_th, {flex : this.props.flex || 1}]}>
                <Text testID={this.props.testID}
                      onPress={this.props.onClick || this.props.onPress}
                      style={[Styles.table_thead_tr_th]}>{this.props.children}</Text>
            </View>
        );
    }
}

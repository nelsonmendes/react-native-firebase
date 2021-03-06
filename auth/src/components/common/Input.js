import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

const styles = StyleSheet.create({
  inputStyle:{
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
      flex: 2,
  },
  labelStyle: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1,
  },
  containerStyle: {
      height: 40,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
  }
});

export default class Input extends Component {
    render() {
        return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>
                {this.props.label}
            </Text>
            <TextInput 
                autoCorrect={false}
                secureTextEntry={this.props.secureTextEntry}
                placeholder={this.props.placeholder}
                style={styles.inputStyle}
                onChangeText={this.props.onChangeText}
                value={this.props.value} />
        </View>
        );
    }
}
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    viewStyle: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
    },
    userHeader: {
      fontSize: 100,
      color: 'red',
    },
});

export default class Header extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.red}>Hello {this.props.headerText}!</Text>
      </View>
    );
  }
}

import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default class Spinner extends Component {
  render() {
    return (
      <View style={styles.spinnerStyle}>
        <ActivityIndicator size={this.props.size || 'large'}  />
      </View>
    );
  }
}

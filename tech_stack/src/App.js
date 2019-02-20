import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { creatStore } from 'redux';
import reducers from './reducers'

export default class App extends Component {
    render () {
        return (
            <Provider store={creatStore(reducers)}>
                <View />
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    
  });
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/common/Header';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

export default class App extends Component {
    componentWillMount() {
      firebase.initializeApp({
        apiKey: 'AIzaSyApxpQSA75_C1Tx7Ha4cOcseO1hGHmZ4mw',
        authDomain: 'auth-a1c94.firebaseapp.com',
        databaseURL: 'https://auth-a1c94.firebaseio.com',
        projectId: 'auth-a1c94',
        storageBucket: 'auth-a1c94.appspot.com',
        messagingSenderId: '64989890865'
      });
    }

    render () {
        return (
            <View style={styles.container}>
                <Header headerText={'hello'}/>
                <LoginForm />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
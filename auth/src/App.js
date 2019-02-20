import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/common/Header';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Button from './components/common/Button';
import Spinner from './components/common/Spinner';

export default class App extends Component {
    state = {
        loggedIn: null
    };
    componentWillMount() {
      firebase.initializeApp({
        apiKey: 'AIzaSyApxpQSA75_C1Tx7Ha4cOcseO1hGHmZ4mw',
        authDomain: 'auth-a1c94.firebaseapp.com',
        databaseURL: 'https://auth-a1c94.firebaseio.com',
        projectId: 'auth-a1c94',
        storageBucket: 'auth-a1c94.appspot.com',
        messagingSenderId: '64989890865'
      });

      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            this.setState({
                loggedIn: true
            })
        } else {
            this.setState({
                loggedIn: false
            })
        }
      });
    }

    renderContent () {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                )
            case false:
                return <LoginForm />
            default:
                return <Spinner />
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <Header headerText={'hello'}/>
                {this.renderContent()}
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
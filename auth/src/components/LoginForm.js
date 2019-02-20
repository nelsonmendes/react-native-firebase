import React, { Component } from 'react';
import { StyleSheet, TextInput, Text } from 'react-native';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Spinner from './common/Spinner';
import firebase from 'firebase';

const styles = StyleSheet.create({
  containerStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#ddd',
      shadowOffset: { width: 0, height: 2, },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
  },
  errorContainer: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red',
  }
});

export default class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onButtonPress() {
        const {email, password} = this.state;

        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            this.onLoginSuccess.bind(this)
        )
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(
                this.onLoginSuccess.bind(this)
            )
            .catch(
                this.onLoginFail.bind(this)
            )
        })
    }

    onLoginFail() {
        this.setState({error: 'Authentication failed', loading: false});
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        })
    }

    render() {
        return (
        <Card>
            <CardSection>
                <Input 
                    label="Email"
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email} />
            </CardSection>
            <CardSection>
                <Input 
                    label="Password"
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password} />
            </CardSection>
            <Text style={styles.errorContainer}>
                {this.state.error !== '' && this.state.error}
            </Text>
            <CardSection>
                {this.state.loading ? <Spinner /> :
                <Button onPress={this.onButtonPress.bind(this)}>
                    Login
                </Button>}
            </CardSection>
        </Card>
        );
    }
}
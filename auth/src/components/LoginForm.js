import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';

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

});

export default class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    };
    render() {
        return (
        <Card>
            <CardSection>
                <Input 
                    label="Email"
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.text} />
            </CardSection>
            <CardSection>
                <Input 
                    label="Password"
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password} />
            </CardSection>
            <CardSection>
                <Button>Login</Button>
            </CardSection>
        </Card>
        );
    }
}
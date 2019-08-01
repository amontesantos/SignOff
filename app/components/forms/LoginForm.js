import React from 'react';
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, Text } from 'react-native';

import UserInput from '../../components/UserInput';

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onEmailChange(str) {
        this.setState({ email: str });
    }

    onPasswordChange(str) {
        this.setState({ password: str });
    }

    async onSubmit() {
        const { email, password } = this.state;
        const response = await fetch('192.168.43.21:3001/api/auth/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        }).catch(err => console.log(err));
        console.log('Response:');
        console.log(response);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='position' style={styles.container}>
                <UserInput
                    name='email'
                    source='md-mail'
                    placeholder='Email'
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    onChangeText={this.onEmailChange.bind(this)}
                />
                <UserInput
                    name='password'
                    source='md-lock'
                    placeholder='Password'
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    toggleHide={true}
                    onChangeText={this.onPasswordChange.bind(this)}
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => this.onSubmit()}
                    activeOpacity={1}
                >
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E30BD1',
        borderRadius: 20,
        zIndex: 100,
        height: 40,
        marginHorizontal: 20,
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent'
    }
});
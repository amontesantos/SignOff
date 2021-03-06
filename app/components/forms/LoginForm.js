import React from 'react';
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, Text, Platform } from 'react-native';
import axios from 'axios';
import { withNavigation } from 'react-navigation';

import UserInput from '../../components/UserInput';

class LoginForm extends React.Component {

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

    onSubmit() {
        const { email, password } = this.state;
        axios({
            method: 'POST',
            url: 'http://10.0.0.239:3001/api/auth/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: { email, password },
        })
        .then(res => {
            const valid = res.data.result;
            if (valid) {
                this.props.navigation.navigate('Main');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <KeyboardAvoidingView 
                style={styles.container}
                behavior={'position'}
                keyboardVerticalOffset={Platform.select({ios: 0, android: -35})}
            >
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
                    activeOpacity={0.8}
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(10, 213, 189, 0.7)',
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

export default withNavigation(LoginForm);
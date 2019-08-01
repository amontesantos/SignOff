import React from 'react';
import { KeyboardAvoidingView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import axios from 'axios';

import UserInput from '../UserInput';

class RegisterForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    onFirstNameChange(str) {
        this.setState({ firstName: str });
    }

    onLastNameChange(str) {
        this.setState({ lastName: str });
    }

    onEmailChange(str) {
        this.setState({ email: str });
    }

    onPasswordChange(str) {
        this.setState({ password: str });
    }

    onConfirmPasswordChange(str) {
        this.setState({ confirmPassword: str });
    } 

    onSubmit() {
        axios({
            method: 'POST',
            url: 'http://10.0.0.239:3001/api/auth/register',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
            }
        })
        .then(res => {
            const { result, error } = res.data;
            console.log(result);
            if (!error) {
                this.props.navigation.navigate('Login');
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
            >
                    <UserInput 
                        name='firstName'
                        source='md-person'
                        placeholder='First Name'
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        onChangeText={this.onFirstNameChange.bind(this)}
                    />
                    <UserInput 
                        name='lastName'
                        source='md-person'
                        placeholder='Last Name'
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        onChangeText={this.onLastNameChange.bind(this)}
                    />
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
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                    <UserInput
                        name='confirmPassword'
                        source='md-lock'
                        placeholder='Confirm Password'
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        onChangeText={this.onConfirmPasswordChange.bind(this)}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.onSubmit()}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.text}>Register</Text>
                    </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 2,
        flexDirection: 'column',
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

export default withNavigation(RegisterForm);
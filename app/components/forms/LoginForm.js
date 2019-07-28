import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

import UserInput from '../../components/UserInput';

export default class LoginForm extends React.Component {

    render() {
        return (
            <KeyboardAvoidingView behavior='position' style={styles.container}>
                <UserInput
                    source='md-mail'
                    placeholder='Email'
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                />
                <UserInput
                    source='md-lock'
                    placeholder='Password'
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    toggleHide={true}
                />
            </KeyboardAvoidingView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});
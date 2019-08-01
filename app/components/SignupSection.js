import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

import LayoutConstants from '../constants/Layout';

class SignupSection extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text 
                    style={styles.text}
                    onPress={() => this.props.navigation.navigate('Register')}
                >
                    Create Account
                </Text>
                <Text style={styles.text}>Forgot Password?</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 65,
        width: LayoutConstants.window.width,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent'
    }
});

export default withNavigation(SignupSection);
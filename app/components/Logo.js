import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import logoImg from '../assets/images/signoff-logo.png';

export default class Logo extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={logoImg} style={styles.image} />
                <Text style={styles.text}>SignOff</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 80,
        height: 80
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20,
        fontSize: 26
    }
});
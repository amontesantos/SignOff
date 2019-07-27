import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import globalStyles from '../assets/styles/globalStyles';

export default function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <Text style={[globalStyles.p, { textAlign: 'center', marginBottom: 15 }]}>
                Welcome! First, let's set an away message for your phone.
            </Text>
            <Button 
                style={{ width: 75 }} 
                onPress={() => props.navigation.navigate('Main')} 
                title="Continue" 
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 30
    }
});

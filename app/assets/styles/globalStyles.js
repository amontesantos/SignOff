import { StyleSheet, Platform } from 'react-native';
import { Constants } from 'expo';

export default globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    },
    h1: {
        fontSize: 21,
        fontWeight: 'bold',
        marginBottom: 5
    },
    p: {
        fontSize: 16,
        marginBottom: 5
    },
    padded: {
        padding: 25
    },
})

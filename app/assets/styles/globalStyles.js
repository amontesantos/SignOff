import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

export default globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    }
})

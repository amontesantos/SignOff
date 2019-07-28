import React from 'React';
import { StyleSheet, ImageBackground } from 'react-native';

import bgSource from '../assets/images/gradient-background.jpg';

export default class Wallpaper extends React.Component {
    render() {
        return (
            <ImageBackground style={styles.picture} source={bgSource}>
                { this.props.children }
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});
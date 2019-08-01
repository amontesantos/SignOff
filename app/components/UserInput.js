import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import LayoutConstants from '../constants/Layout';

export default class UserInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showPass: !props.toggleHide
        };
    }

    onEyeBtnToggle() {
        this.setState({ showPass: !this.state.showPass });
    }

    render() {
        return (
            <View style={styles.inputWrapper}>
                <Ionicons name={this.props.source} style={styles.inlineImg} size={20} />
                <TextInput 
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    secureTextEntry={!this.state.showPass}
                    autoCorrect={this.props.autoCorrect}
                    autoCapitalize={this.props.autoCapitalize}
                    returnKeyType={this.props.returnKeyType}
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    underlineColorAndroid='transparent'
                    onChangeText={(str) => this.props.onChangeText(str)}
                />
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.eyeBtn}
                    onPress={() => this.onEyeBtnToggle()}
                >
                    { this.props.toggleHide &&
                    <Ionicons 
                        name={this.state.showPass ? 'md-eye' : 'md-eye-off'} 
                        size={25} 
                        color='rgba(255, 255, 255, 0.8)' 
                    />
                    }
                </TouchableOpacity>
            </View>
        );
    }
}

UserInput.propTypes = {
    source: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    toggleHide: PropTypes.bool,
    autoCorrect: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    returnKeyType: PropTypes.string
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: LayoutConstants.window.width - 40,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 20,
        color: '#ffffff'
    },
    inputWrapper: {
        flex: 1
    },
    inlineImg: {
        position: 'absolute',
        zIndex: 99,
        left: 35,
        top: 9,
        color: 'rgba(255, 255, 255, 0.7)'
    },
    eyeBtn: {
        position: 'absolute',
        zIndex: 99,
        left: 310,
        top: 7,
    }
});
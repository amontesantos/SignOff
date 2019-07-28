import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container } from 'native-base';

import AppNavigator from './navigation/AppNavigator';
import globalStyles from './assets/styles/globalStyles';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    }

    return (
      <Container style={globalStyles.container}>
        <AppNavigator />
      </Container>
    )
  }

}
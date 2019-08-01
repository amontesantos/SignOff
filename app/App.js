import React from 'react';
import { Asset } from 'expo-asset';
import { AppLoading, registerRootComponent } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container } from 'native-base';

import AppNavigator from './navigation/AppNavigator';
import globalStyles from './assets/styles/globalStyles';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false
    };
  }

  loadResourcesAsync = async () => {
    await Promise.all([
      Asset.loadAsync([
        require('./assets/images/gradient-background.jpg'),
        require('./assets/images/signoff-logo.png'),
      ]),
      Font.loadAsync({
        ...Ionicons.font,
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      }),
    ]);
  }

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onFinish={() => this.handleFinishLoading()}
        />
      );
    }

    return (
      <Container style={globalStyles.container}>
        <AppNavigator />
      </Container>
    )
  }

}

registerRootComponent(App);

export default App;
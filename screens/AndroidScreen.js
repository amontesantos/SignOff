import React from 'react';
import { View } from 'react-native';

import AndroidContent from '../components/AndroidContent';
import globalStyles from '../assets/styles/globalStyles';

export default function AndroidScreen() {
  return (
    <View style={globalStyles.container}>
      <AndroidContent />
    </View>
  );
}

AndroidScreen.navigationOptions = {
  title: 'Android',
};

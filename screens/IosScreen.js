import React from 'react';
import { View } from 'react-native'

import IosContent from '../components/IosContent';
import globalStyles from '../assets/styles/globalStyles';

export default function IosScreen() {
  return (
    <View style={globalStyles.padded}>
      <IosContent />
    </View>
  );
}

IosScreen.navigationOptions = {
  title: 'iOS',
};
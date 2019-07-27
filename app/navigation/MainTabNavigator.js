import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import IosScreen from '../screens/IosScreen';
import AndroidScreen from '../screens/AndroidScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const IosStack = createStackNavigator(
  {
    Ios: IosScreen,
  },
  config
);

IosStack.navigationOptions = {
  tabBarLabel: 'iOS',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='logo-apple' />
  ),
};

IosStack.path = '';

const AndroidStack = createStackNavigator(
  {
    Android: AndroidScreen,
  },
  config
);

AndroidStack.navigationOptions = {
  tabBarLabel: 'Android',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='logo-android' />
  ),
};

AndroidStack.path = '';

const tabNavigator = createBottomTabNavigator({
  IosStack: IosStack,
  AndroidStack: AndroidStack,
});

tabNavigator.path = '';

export default tabNavigator;

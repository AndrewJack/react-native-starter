/**
 * @flow
 */

import React from 'react';

import { useScreens } from 'react-native-screens';
import { createStackNavigator } from 'react-navigation';
import codePush from 'react-native-code-push';

import { HomeScreen } from './HomeScreen';
import { DetailsScreen } from './DetailsScreen';

useScreens();

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

class AppBase extends React.Component<*> {
  render(): React$Node {
    return <RootStack />;
  }
}

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
  minimumBackgroundDuration: 60 * 3,
};

export const App = codePush(codePushOptions)(AppBase);

/**
 * @flow
 */

import React from 'react';

import { createStackNavigator } from 'react-navigation';
import codePush from 'react-native-code-push';
import Firebase from 'react-native-firebase';

import { HomeScreen } from './HomeScreen';
import { DetailsScreen } from './DetailsScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

function getActiveRouteName(navigationState: *): ?string {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

class AppBase extends React.Component<*> {
  render(): React$Node {
    return (
      <RootStack
        onNavigationStateChange={(prevState: *, currentState: *) => {
          const currentScreen = getActiveRouteName(currentState);
          const prevScreen = getActiveRouteName(prevState);

          if (currentScreen && prevScreen !== currentScreen) {
            Firebase.analytics().setCurrentScreen(currentScreen, currentScreen);
          }
        }}
      />
    );
  }
}

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
  minimumBackgroundDuration: 60 * 3,
};

export const App = codePush(codePushOptions)(AppBase);

/**
 * @flow
 */

import { useScreens } from 'react-native-screens';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import codePush from 'react-native-code-push';

import { HomeScreen } from './HomeScreen';
import { DetailsScreen } from './DetailsScreen';

useScreens();

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
      },
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        title: 'Details',
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(RootStack);

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
  minimumBackgroundDuration: 60 * 3,
};

export const App = codePush(codePushOptions)(AppContainer);

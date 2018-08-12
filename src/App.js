/**
 * @flow
 */

import React from 'react';
import { createStackNavigator } from 'react-navigation';

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

export class App extends React.Component<*> {
  render(): React$Node {
    return <RootStack />;
  }
}

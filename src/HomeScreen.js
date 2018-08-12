/**
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import type { NavigationScreenProp } from 'react-navigation';

type Props = {
  navigation: NavigationScreenProp,
};

export class HomeScreen extends Component<Props> {
  static navigationOptions = {
    title: 'Home',
  };

  render(): React$Node {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          accessibilityLabel="Go to details"
          accessibilityComponentType="button"
          accessibilityTraits="button"
          onPress={this.goToDetails}
        >
          <Text style={styles.welcome}>Hello this is the home screen</Text>
        </TouchableOpacity>
      </View>
    );
  }

  goToDetails = () => {
    this.props.navigation.navigate('Details');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

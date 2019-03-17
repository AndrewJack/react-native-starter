/**
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import type { NavigationScreenProp } from 'react-navigation';

type Props = {
  navigation: NavigationScreenProp,
};

export function HomeScreen(props: Props): React$Node {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        accessibilityLabel="Go to details"
        accessibilityComponentType="button"
        accessibilityTraits="button"
        onPress={() => props.navigation.navigate('Details')}
      >
        <Text style={styles.welcome}>Hello this is the home screen</Text>
      </TouchableOpacity>
    </View>
  );
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

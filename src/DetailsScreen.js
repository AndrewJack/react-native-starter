/**
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import type { NavigationScreenProp } from 'react-navigation';

type Props = {
  navigation: NavigationScreenProp,
};

export function DetailsScreen(props: Props): React$Node {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hello this is the details screen</Text>
      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        accessibilityLabel="Increase count"
        accessibilityComponentType="button"
        accessibilityTraits="button"
      >
        <Text style={styles.welcome}>{`Increase count: ${count}`}</Text>
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

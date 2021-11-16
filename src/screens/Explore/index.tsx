import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Explore = ({navigation}: any) => {
  return (
    <View style={styles.root}>
      <Text>Let's Explore!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
});

export default Explore;

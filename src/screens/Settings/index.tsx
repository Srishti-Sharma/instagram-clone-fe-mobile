import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Settings = ({navigation}: any) => {
  return (
    <View style={styles.root}>
      <Text>This is Settings!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'thistle',
  },
});

export default Settings;

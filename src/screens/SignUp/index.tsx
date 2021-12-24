import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SignUp = ({navigation}: any) => {
  return (
    <View style={styles.root}>
      <Text>SignUp!</Text>
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

export default SignUp;

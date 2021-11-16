import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home = ({navigation}: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(response => {
        console.log('response ', response);
        return response.json();
      })
      .then(json => {
        setData(json);
      });
  }, []);

  return (
    <View style={styles.root}>
      <Text>Welcome Home!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lavender',
  },
});

export default Home;

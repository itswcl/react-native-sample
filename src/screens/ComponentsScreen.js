// step 1 with libraries needed
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// step 2 component function
const ComponentsScreen = () => {
  // const greeting = <Text>My name is Wei</Text>;
  const name = 'Wei';
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

// step 3 stylesheet for component
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  }
});

// step 4 export component for use
export default ComponentsScreen;
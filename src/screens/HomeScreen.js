import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigate('Components')}
      />
      <Button
        title='Go to List Demo'
        onPress={() => navigate('List')}
      />
      <Button
        title='Go to ImageScreen'
        onPress={() => navigate('ImageScreen')}
      />
      <Button
        title='Go to Counter'
        onPress={() => navigate('CounterScreen')}
      />
      <Button
        title='Go to Color'
        onPress={() => navigate('ColorScreen')}
      />
      <Button
        title='Go to Square Demo'
        onPress={() => navigate('SquareScreen')}
      />
      <Button
        title='Go to Text Demo'
        onPress={() => navigate('TextScreen')}
      />
      <Button
        title='Go to Box Demo'
        onPress={() => navigate('BoxScreen')}
      />
    </View >
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'F1', age: '20' },
    { name: 'F2', age: '25' },
    { name: 'F3', age: '26' },
    { name: 'F4', age: '27' },
    { name: 'F5', age: '24' },
    { name: 'F6', age: '34' },
    { name: 'F7', age: '24' },
  ]

  return (
    <FlatList
      // horizontal // change alignment
      // showsHorizontalScrollIndicator={false} // hide scrollbar
      data={friends}
      keyExtractor={friend => friend.name}
      // element === {item:{name:<>}, index:idx}
      // item === {item: {name:<>}}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{`${item.name} - Age ${item.age}`}</Text>
      }}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 25
  }
});

export default ListScreen;
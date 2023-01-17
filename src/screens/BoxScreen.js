import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    const { viewStyle, textOneStyle, textTwoStyle, textThreeStyle } = styles;
    return <View style={viewStyle}>
        <Text style={textOneStyle}>Child #1</Text>
        <Text style={textTwoStyle}>Child #2</Text>
        <Text style={textThreeStyle}>Child #3</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textOneStyle: {
        backgroundColor: 'red',
        alignSelf: 'flex-start',
        height: 100,
        width: 100,
    },
    textTwoStyle: {
        backgroundColor: 'green',
        alignSelf: 'flex-end',
        height: 100,
        width: 100,
    },
    textThreeStyle: {
        backgroundColor: 'purple',
        alignSelf: 'flex-start',
        height: 100,
        width: 100,
    }
});

export default BoxScreen;
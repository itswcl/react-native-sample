import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

const reducer = (state, action) => {
    // state === {counter: number}
    // action === {type: 'incre' || 'decre', payload: 1 || -1}
    const { type, payload } = action;
    switch (type) {
        case 'increase':
            return { ...state, count: state.count + payload };
        case 'decrease':
            return { ...state, count: state.count + payload };
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    const { count } = state;

    return <View>
        <Button title="Increase" onPress={() => dispatch({ type: 'increase', payload: 1 })} />
        <Button title="Decrease" onPress={() => dispatch({ type: 'decrease', payload: -1 })} />
        <Text>Current Count: {count}</Text>
    </View>
}

const styles = StyleSheet.create({});

export default CounterScreen;
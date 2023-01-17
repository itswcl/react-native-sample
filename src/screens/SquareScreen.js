import React, { useReducer } from "react";
import { View, Text, StyleSheet } from 'react-native'
import { Switch } from "react-native-gesture-handler";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state  === {red: number, green: number, blue: number}
    // action === {type: 'red' || 'blue' || 'green, payload: 30 || -30}
    // action is like the way how we to upgrade the state object
    // action {type: string, payload: {}}
    // always return the state as the state in useReducer
    const { type, payload } = action
    const currentCounter = state[type] + payload;

    if (currentCounter > 255 || currentCounter < 0) {
        return state;
    }

    switch (type) {
        case 'red':
            return { ...state, red: state.red + payload };
        case 'green':
            return { ...state, green: state.green + payload };
        case 'blue':
            return { ...state, blue: state.blue + payload };
        default:
            return state;
    }
};

const SquareScreen = () => {
    // dispatch is for `action object`
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const { red, blue, green } = state;

    return <View>
        <ColorCounter
            color="Red"
            // dispatch(action object here)
            onIncrease={() => dispatch({ type: 'red', payload: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ type: 'red', payload: COLOR_INCREMENT * -1 })}
        />
        <ColorCounter color="Blue"
            onIncrease={() => dispatch({ type: 'blue', payload: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ type: 'blue', payload: COLOR_INCREMENT * -1 })}
        />
        <ColorCounter color="Green"
            onIncrease={() => dispatch({ type: 'green', payload: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ type: 'green', payload: COLOR_INCREMENT * -1 })}
        />
        <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>
};

const styles = StyleSheet.create({});

export default SquareScreen;
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
    const [password, setPassword] = useState('');
    const { input } = styles
    return <View>
        <Text>Enter Password:</Text>
        <TextInput
            style={input}
            autoCapitalize='none'
            autoCorrect={false}
            value={password}
            onChangeText={(newPassword) => setPassword(newPassword)}
        />
        {
            password.length < 5 ? <Text>Password must be longer than 5 characters</Text> : null
        }
    </View>
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    }
});

export default TextScreen;
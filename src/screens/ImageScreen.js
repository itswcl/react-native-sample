import React from "react";
import { StyleSheet, View, Text } from 'react-native'
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
                title='Forest'
                imgSource={require('../../assets/forest.jpg')}
                score={9}
            />
            <ImageDetail
                title='Beach'
                imgSource={require('../../assets/beach.jpg')}
                score={7}
            />
            <ImageDetail
                title='Mountain'
                imgSource={require('../../assets/mountain.jpg')}
                score={10}
            />
        </View>
    )
}

const styleSheet = StyleSheet.create({});

export default ImageScreen
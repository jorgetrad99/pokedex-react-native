import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Pokemon = (props) => {
    const { navigation, route } = props;

    console.log(route)
    return (
        <View>
            <Text>Estamos en un Pokemon</Text>
        </View>
    );
}

export default Pokemon;

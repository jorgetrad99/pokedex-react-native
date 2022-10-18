import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getPokemonDetailById } from '../api/pokemon';

const Pokemon = (props) => {
    const { navigation, route: { params } } = props;

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await getPokemonDetailById(params.id);
                setPokemon(response);
                console.log(response)
            } catch (error) {
                navigation.goBack()
            }
        })()
    }, [params]);

    if (!pokemon) return null;

    return (
        <View>
            <Text>Estamos en un Pokemon</Text>
            <Text>{pokemon.name}</Text>
        </View>
    );
}

export default Pokemon;

import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { getPokemonApi } from '../api/pokemon';

const Pokedex = () => {
    /*  const [] = useState(); */

    const loadPokemons = async () => {
        try {
            const response = await getPokemonApi();
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        (async () => {
            await loadPokemons();
        })()
    }, []);

    return (
        <SafeAreaView>
            <Text>Pokedex</Text>
        </SafeAreaView>
    );
}

export default Pokedex;

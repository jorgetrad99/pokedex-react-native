import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import PokemonCard from './PokemonCard';

const PokemonList = (props) => {
    const { pokemons } = props;
    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.FlatListContentContainer}
        />
    );
}

const styles = StyleSheet.create({
    FlatListContentContainer: {
        paddingHorizontal: 5,
    }
})

export default PokemonList;

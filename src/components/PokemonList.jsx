import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

const PokemonList = (props) => {
    const { pokemons } = props;
    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => <Text>{item.name}</Text>}
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

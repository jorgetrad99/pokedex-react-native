import React from 'react';
import { StyleSheet, Text, FlatList, ActivityIndicator } from 'react-native';
import PokemonCard from './PokemonCard';

const PokemonList = (props) => {
    const { pokemons, loadPokemons, isNext } = props;

    const loadMorePokemons = () => {
        loadPokemons()
    };

    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.FlatListContentContainer}
            onEndReached={isNext && loadMorePokemons}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                isNext && (
                    <ActivityIndicator
                        size='large'
                        style={styles.spinner}
                        color='#AEAEAE'
                    />
                )
            }
        />
    );
}

const styles = StyleSheet.create({
    FlatListContentContainer: {
        paddingHorizontal: 5,
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60,
    },
})

export default PokemonList;

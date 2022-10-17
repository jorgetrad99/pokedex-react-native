import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { getPokemonApi, getPkemonDetailsByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);

    const loadPokemons = async () => {
        try {
            const response = await getPokemonApi();
            const pokemonsArray = [];

            for await (const pokemon of response.results) {
                const pokemonDetails = await getPkemonDetailsByUrlApi(pokemon.url);
                pokemonsArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    type: pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    imagen: pokemonDetails.sprites.other['official-artwork'].front_default
                })
            }

            setPokemons([...pokemons, ...pokemonsArray])
            console.log(pokemons)
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
            <PokemonList pokemons={pokemons} />
        </SafeAreaView>
    );
}

export default Pokedex;

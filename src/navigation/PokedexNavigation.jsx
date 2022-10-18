import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokedexScreen from '../screens/Pokedex';
import Pokemon from '../screens/Pokemon';

const Stack = createNativeStackNavigator();

const PokedexNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="Pokedex"
                component={PokedexScreen}
            />
            <Stack.Screen
                name="Pokemon"
                component={Pokemon}
                options={{
                    title: '',
                    headerTransparent: true
                }}
            />
        </Stack.Navigator>
    );
}

export default PokedexNavigation;

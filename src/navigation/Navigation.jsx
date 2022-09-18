import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Image } from 'react-native';
import AccountScreen from '../screens/Account';
import PokedexScreen from '../screens/Pokedex';
import FavoritesScreen from '../screens/Favorites';

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator>

            <Tab.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    tabBarLabel: "Favoritos",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Pokedex"
                component={PokedexScreen}
                options={{
                    tabBarLabel: "Pokedex",    //Just render the pokeball, not text
                    tabBarIcon: () => renderPokeball(),
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarLabel: "Cuenta",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const renderPokeball = () => {
    return (
        <Image
            source={require('../assets/pokeball.png')}
            style={{
                width: 75,
                height: 75,
                bottom: 22,
            }}
        />
    );
}

export default Navigation;

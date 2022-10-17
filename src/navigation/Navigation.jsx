import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Image } from 'react-native';
import FavoritesNavigation from './FavoritesNavigation';
import AccountNavigation from './AccountNavigation';
import PokedexNavigation from './PokedexNavigation';

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator>

            <Tab.Screen
                name="Fav"
                component={FavoritesNavigation}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Pdex"
                component={PokedexNavigation}
                options={{
                    title: '',
                    headerTransparent: true,
                    tabBarLabel: "Pokedex",    //Just render the pokeball, not text
                    tabBarIcon: () => renderPokeball(),
                }}
            />
            <Tab.Screen
                name="Acco"
                component={AccountNavigation}
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

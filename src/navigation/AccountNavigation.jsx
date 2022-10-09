import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/Account';

const Stack = createNativeStackNavigator();

const AccountNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Account" component={AccountScreen} />
        </Stack.Navigator>
    );
}

export default AccountNavigation;

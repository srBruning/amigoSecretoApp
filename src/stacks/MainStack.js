import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainTab from './MainTab';
import Preload from '../pages/Preload';
import SignIn from '../pages/SignIn';

const Stack = createStackNavigator();

export  default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} /> 
        <Stack.Screen name="SignIn" component={SignIn} /> 
        <Stack.Screen name="MainTab" component={MainTab} /> 
    </Stack.Navigator>
);
import React from 'react';
import { Text, View } from 'react-native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import {Feather} from '@expo/vector-icons'
import Camera from '../pages/Camera';
import Main from '../pages/Main';
 
const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator  >
        <Tab.Screen name="Main" component={Main} 
            options={{tabBarIcon: ({color}) => <Feather name='home' size={22} color={color}/>
            }}
        />
        <Tab.Screen name="Camera" component={Camera} 
            options={{tabBarIcon: ({color}) => <Feather name='camera' size={22} color={color}/>
            }}
        />
    </Tab.Navigator>
);
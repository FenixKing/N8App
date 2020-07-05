import React, { useState } from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import Home from '../screen/Home';
import Product from '../screen/Product';
import Bag from '../screen/Bag';

import {
    HomeButton,
    Image,
    Title
} from './styled'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    const { show } = useSelector(state => state.shows);
    return (
        <Stack.Navigator headerMode='none' initialRouteName="Home">
            <Stack.Screen name="Home" component={BottomTab} />
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="Bag" component={Bag} />
        </Stack.Navigator>
    )
}

const BottomTab = () => {
    const { show } = useSelector(state => state.shows);
    const opacity = show ? 1 : 0
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    height: 65,
                    paddingLeft: 10,
                    borderRadius: 40,
                    opacity: opacity
                },
                keyboardHidesTabBar: true
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={Home}
                options={{
                    tabBarButton: () => (
                        <HomeButton opacity={1}>
                            <Image source={require('../../assets/TabBottom/home.png')} />
                            <Title>Home</Title>
                        </HomeButton>
                    ),
                    tabBarVisible: show
                }}
            />
            <Tab.Screen
                name="CartScreen"
                component={Home}
                options={{
                    tabBarIcon: () => (<Image source={require('../../assets/TabBottom/shopping-cart.png')} />),
                    tabBarVisible: show
                }}
            />
            <Tab.Screen
                name="NavigationScreen"
                component={Home}
                options={{
                    tabBarIcon: () => (<Image source={require('../../assets/TabBottom/navigation-2.png')} />),
                    tabBarVisible: show
                }}
            />
            <Tab.Screen
                name="UserScreen"
                component={Home}
                options={{
                    tabBarIcon: () => (<Image source={require('../../assets/TabBottom/people.png')} />),
                    tabBarVisible: show
                }}
            />
        </Tab.Navigator >
    )
}

export default () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen
                name="BottomTab"
                component={HomeScreen}
            />
        </Stack.Navigator>
    )
}
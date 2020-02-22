import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();

import Login from './modules/login';

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        headerTintColor: '#FFF'
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
}

import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();

import Loading from './loading';
import Login from './modules/sign-in/screens/Login';
import SignUp from './modules/sign-in/screens/SignUp';

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Loading"
        component={Loading}
      />
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
      />
    </Stack.Navigator>
  );
}

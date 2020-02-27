import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import Loading from './loading';
import Login from './modules/sign-in/screens/Login';
import SignUp from './modules/sign-in/screens/SignUp';
import Home from './modules/home/screens/Home';
import Profile from './modules/home/screens/Profile';
import EditProfile from './modules/home/screens/EditProfile';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

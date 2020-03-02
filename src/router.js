import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import Loading from './loading';
import Login from './modules/sign-in/screens/Login';
import SignUp from './modules/sign-in/screens/SignUp';
import Home from './modules/home/screens/Home';
import Profile from './modules/home/screens/Profile';
import EditProfile from './modules/home/screens/EditProfile';
import ComingSoon from './modules/home/screens/ComingSoon';
import CreateTransaction from './modules/transactions/screens/Create';
import ListTransaction from './modules/transactions/screens/List';

const Stack = createStackNavigator();

export default () => {
  const {token} = useSelector(store => store.auth);

  return (
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{
        headerShown: false
      }}
    >
      {!token ? (
        <>
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="CreateTransaction" component={CreateTransaction} />
          <Stack.Screen name="ListTransaction" component={ListTransaction} />
          <Stack.Screen name="ComingSoon" component={ComingSoon} />
        </>
      )}
    </Stack.Navigator>
  );
};

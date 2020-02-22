import React from 'react';
import Routes from './router';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default App = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <Routes />
  </NavigationContainer>
);

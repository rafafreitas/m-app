import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persist} from './store';
import Routes from './router';

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Routes />
        <FlashMessage position="top" duration={3000} />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

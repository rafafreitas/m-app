import {combineReducers, createStore} from 'redux';
// import createStore from './createStore';

import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-community/async-storage';

import auth from './modules/auth/reducers';

const reducers = combineReducers({
  auth
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer);
const persist = persistStore(store);

export {store, persist};

import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.configure()
    .setAsyncStorageHandler(AsyncStorage)
    .useReactNative()
    .use(reactotronRedux())
    .connect();

  tron.clear();

  console.tron = tron;
}

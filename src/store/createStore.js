import {createStore, compose} from 'redux';
import '../config/reactotron';

export default reducers => {
  const enhancer = __DEV__ ? compose(console.tron.createEnhancer()) : null;

  return createStore(reducers, enhancer);
};

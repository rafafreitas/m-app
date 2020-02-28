import * as types from './types';

export const setSession = () => ({
  type: types.SET_AUTH
});

export const logoff = is => ({
  type: types.SET_LOGOFF,
  payload: is
});
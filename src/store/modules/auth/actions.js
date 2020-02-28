import * as types from './types';

export const setSession = (token, userDetails) => ({
  type: types.SET_AUTH,
  payload: { token, userDetails }
});

export const logoff = () => ({
  type: types.SET_LOGOFF
});
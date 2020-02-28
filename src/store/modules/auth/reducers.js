import * as types from './types';

const INITIAL_STATE = {
  token: null,
  userDetails: {}
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_AUTH:
      return {...state, token: action.payload.token, userDetails: action.payload.userDetails};
    case types.SET_LOGOFF:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default authReducer;

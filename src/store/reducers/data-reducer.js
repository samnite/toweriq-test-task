import { SET_USERS } from '../types';
import { createReducer } from '../redux';

const initialState = {
  users: null,
};

export default createReducer(initialState, {
  [SET_USERS]: (state, { payload }) => {
    return {
      ...state,
      users: payload,
    };
  },
});

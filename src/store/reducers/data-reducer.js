import { SET_LOADING, SET_USERS } from '../types';
import { createReducer } from '../redux';

const initialState = {
  users: [],
  loading: false,
};

export default createReducer(initialState, {
  [SET_USERS]: (state, { payload }) => {
    return {
      ...state,
      users: payload,
      loading: false,
    };
  },
  [SET_LOADING]: state => {
    return {
      ...state,
      loading: true,
    };
  },
});

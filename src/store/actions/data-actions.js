import axios from 'axios';
import { SET_LOADING, SET_USERS } from '../types';

export const getUsers = () => dispatch => {
  const fetchUsers = async () => {
    dispatch({ type: SET_LOADING });
    const res = await axios.get('http://localhost:5000/users');
    dispatch({ type: SET_USERS, payload: res.data });
  };
  fetchUsers();
};

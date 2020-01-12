import axios from 'axios';
import { SET_LOADING, SET_USERS } from '../types';

export const setUsers = users => {
  return {
    type: SET_USERS,
    payload: users,
  };
};

export const getUsers = () => dispatch => {
  const fetchUsers = async () => {
    // setLoading(true);
    dispatch({ type: SET_LOADING });
    const res = await axios.get('http://localhost:5000/users');
    console.log(res.data);
    dispatch({ type: SET_USERS, payload: res.data });
    // setPosts(res.data);
    // setLoading(false);
  };
  fetchUsers();
};

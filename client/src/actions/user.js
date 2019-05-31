import axios from 'axios';
import { GET_USERS } from './types';

// Get users from the back end
export const getUsers = () => async dispatch => {
  try {
    const res = await axios.get('/api/users');
    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  } catch (err) {
    console.error('Could not fetch users');
  }
};

import axios from '../api/axios';
export const GET_USERS = 'GET_USERS';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
const ADD_FAVOURITE = 'ADD_FAVOURITE';
const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';

export const getUsers = () => async (dispatch) => {
    const { data } = await axios.get('');
    const users = data.data;
    dispatch({ type: GET_USERS, payload: users});
};

export const getUserById = (id) => async(dispatch) => {
    const userId = '' + id
    const { data } = await axios.get(userId);
    const user = data;
    dispatch({ type: GET_USER_BY_ID, payload: user});
};
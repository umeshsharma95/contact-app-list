import axios from '../api/axios';
export const GET_USERS = 'GET_USERS';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const SORT_LIST = 'SORT_LIST';

export const getUsers = () => async (dispatch) => {
    const { data } = await axios.get('');
    const users = data.data;
    console.log(users)
    dispatch({ type: GET_USERS, payload: users });
};

export const getUserById = (id) => async(dispatch) => {
    const userId = '' + id
    const { data } = await axios.get(userId);
    const user = data;
    dispatch({ type: GET_USER_BY_ID, payload: user});
};

export const addFavourite = (user) => (dispatch) => {
    const favourites = JSON.parse(localStorage.getItem('favourite'))   
    const allFavourites = favourites ? [...favourites, user] : [user];
    localStorage.setItem('favourite', JSON.stringify(allFavourites));
    dispatch({ type: ADD_FAVOURITE, payload: allFavourites});
};

export const removeFavourite = (user) => (dispatch) => {
    const favourites = JSON.parse(localStorage.getItem('favourite'))
    const allFavourites = favourites ? favourites : [];
    const allUser = allFavourites.slice().filter(a => a.id !== user.id)
    localStorage.setItem('favourite', JSON.stringify(allUser));
    dispatch({ type: REMOVE_FAVOURITE, payload: allUser});
};

export const sortList = (items, favItems, sort) => (dispatch) => {
  const users = items.slice();
  const favouriteUser = favItems.slice();
  if (sort !== "none") {
    users.sort((a, b) =>
      sort === "a-z"
        ? a.first_name > b.first_name
          ? 1
          : -1
        : a.first_name < b.first_name
        ? 1
        : -1
    );
    favouriteUser.sort((a, b) =>
      sort === "a-z"
        ? a.first_name > b.first_name
          ? 1
          : -1
        : a.first_name < b.first_name
        ? 1
        : -1
    );
  } else {
    users.sort((a, b) => (a.id > b.id ? 1 : -1));
    favouriteUser.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  dispatch({
    type: SORT_LIST,
    payload: {
      sort,
      users,
      favouriteUser
    },
  });
};
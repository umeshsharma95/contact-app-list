import { GET_USERS, GET_USER_BY_ID, ADD_FAVOURITE, REMOVE_FAVOURITE, SORT_LIST } from './action';


const initState = {
  users : [],
  user: {},
  favouriteUser: [],
}

export default function reducer(state = initState, action) {

  switch (action.type) {
      case GET_USERS:
        return {...state, users: [...action.payload]};
      case GET_USER_BY_ID:
        return {...state, user: action.payload};
      case ADD_FAVOURITE:
        return {...state, favouriteUser: [...action.payload]};
      case REMOVE_FAVOURITE:
        return {...state, favouriteUser: [...action.payload]};
      case SORT_LIST:
        return {...state, users: action.payload.users, favouriteUser: action.payload.favouriteUser};
    default:
      return state
  }
}
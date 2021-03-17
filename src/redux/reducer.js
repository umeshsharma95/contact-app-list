import { GET_USERS, GET_USER_BY_ID } from './action';


const initState = {
  users : [],
  user: {}
}

export default function reducer(state = initState, action) {

  switch (action.type) {
      case GET_USERS:
        return {...state, users: action.payload};
      case GET_USER_BY_ID:
        return {...state, user: action.payload};
    default:
      return state
  }
}
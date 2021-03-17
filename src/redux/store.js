import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';


const favourite = localStorage.getItem('favourite') ? JSON.parse(localStorage.getItem('favourite')) : []
// const initState = { favouriteUser : favourite }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
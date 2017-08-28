import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import loginReducer from './reducers/login.js';

let store = createStore(
	combineReducers({
		login: loginReducer,
	}),
	applyMiddleware(
		thunk
	),
	window.__REDUX_DEVTOOL_EXTENSION__ && __REDUX_DEVTOOL_EXTENSION__()
);

export default store;
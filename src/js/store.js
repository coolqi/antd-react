import { createStore, combineReducers, applyMiddleware } from 'redux';
// import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import Login from './reducers/login.js';

// const loggerMiddleware = createLogger();

let Store = createStore(
	combineReducers({
		Login
	}),
	applyMiddleware(
		thunk
	)
);

export default Store;
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import loginReducer from './reducers/login.js';

// const loggerMiddleware = createLogger();

let store = createStore(
	// if(action.type === 'SAVESTATE') {
	// 	state = action.payload.state;
	// };
	// state = state || {};
	combineReducers({
		login: loginReducer,
	}),
	applyMiddleware(
		thunk
	)
);

export default store;
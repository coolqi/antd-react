import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import tableReducer from './reducers/table.js';

let store = createStore(
	combineReducers({
		table: tableReducer
	}),
	applyMiddleware(
		thunk
	),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
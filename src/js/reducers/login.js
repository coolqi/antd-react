import * as types from '../constants/actionTypes.js';

const loginState = {
	token: '',
	username: ''
}
const loginReducer = (state = loginState, action) => {
	state = state || loginState;
	switch( action.type ) {
		case types.LOGIN:
			return Object.assign({}, state, {
				token: action.payload.token
			})
		case types.SAVE_USERNAME:			
			return Object.assign({}, state, {
				username: action.payload.username
			})
		case types.LOG_OUT:
			return Object.assign({}, state, {
				username: '',
				token: ''
			})
		default: 
			return state;
	}
}

export default loginReducer;

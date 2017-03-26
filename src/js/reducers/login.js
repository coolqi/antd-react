import * as types from '../constants/actionTypes.js';

const loginState = {
	token: 'haha',
	username: ''
}
const loginReducer = (state = loginState, action) => {
	state = state || loginState;
	switch( action.type ) {
		case types.LOGIN:
			// state.token = '1';
			console.log('hello how r u');
			// console.log(state);
			return Object.assign([], state, {
				token: action.payload.token
			})
		case types.SAVE_USERNAME:			
			// console.log(action.payload.username);
			return Object.assign([], state, {
				username: action.payload.username
			})
		case types.GET_LOGIN:
		case types.GET_USERNAME:
			return state;
		case types.LOG_OUT:
			return Object.assign([], state, {
				username: '',
				token: ''
			})
		default: 
			return state;
	}
}

export default loginReducer;
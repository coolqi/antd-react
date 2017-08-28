import * as types from '../constants/actionTypes.js';

const loginState = {
	token: '',
	username: ''
};
const loginReducer = (state = loginState, action) => {
	state = state || loginState;
	switch( action.type ) {
<<<<<<< HEAD
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
=======
	case types.LOGIN:
		return Object.assign([], state, {
			token: action.payload.token
		});
	case types.SAVE_USERNAME:			
		return Object.assign([], state, {
			username: action.payload.username
		});
	case types.LOG_OUT:
		return Object.assign([], state, {
			username: '',
			token: ''
		});
	default: 
		return state;
>>>>>>> a3f35dcadd65e5e2421e4cfb2b09ba21c182122d
	}
};

export default loginReducer;

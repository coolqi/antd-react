import * as types from '../constants/actionTypes.js';
import store from '../store.js';

const loginActions = {
	setLogin(text){
		return {
			type: types.LOGIN,
			payload: {
				token: text
			}
		}
	},
	setUsername(text) {
		return{
			type: types.SAVE_USERNAME,
			payload: {
				username: text
			}
		}
	},
	getLogin() {
		return store.getState().login.token;
	},
	getUsername() {
		return store.getState().login.username;
	},
	getLogout() {
		return {
			type: types.LOG_OUT,
			payload: {
				loginState: {}
			}
		}
	}
}

export default loginActions;
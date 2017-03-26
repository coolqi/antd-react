import * as types from '../constants/actionTypes.js';

// let _loginState = sessionStorage.loginState || [];

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
		types: types.GET_LOGIN;
		console.log('get login: ');
		return this.store;
	},
	getUsername() {
		return this.store.getState().login.username;
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
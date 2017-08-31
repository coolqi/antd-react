import * as types from '../constants/actionTypes.js';
import store from '../store.js';

const tableAction = {
	setTable(list) {
		return {
			type: types.TABLELIST,
			payload: {
				tablelist: list
			}
		};
	},
	getTable() {
		return store.getState().table.table;
	}
};

export default tableAction;
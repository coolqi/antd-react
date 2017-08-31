import * as types from '../constants/actionTypes.js';

const tableState = {
	tablelist: {}
};
const tableReducer = (state = tableState, action) => {
	state = state || tableState;
	let newState = Object.create(state);
	switch( action.type ) {
	case types.TABLELIST:
		newState.tablelist = action.payload.tablelist;
		return newState;
	default: 
		return state;
	}
};

export default tableReducer;

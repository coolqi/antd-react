import Table1 from '../components/table/table.js';
import tableAction from '../actions/table.js';
import { message } from 'antd';
import { connect } from 'react-redux';
import table1 from '../api/table.js';
import store from '../store.js';

function mapStateToProps(state, props) {
	return {
		tablelist: state.table.tablelist
	};
}

function mapDispatchToProps(dispatch, props) {
	return {
		getTablelist: () => {
			dispatch(tableAction.setTable(table1));
		}
	};
}

const TableContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Table1);
export default TableContainer;
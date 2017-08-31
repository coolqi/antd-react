import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Index from './js/containers/index.js';
import Homepage from './js/components/homepage/homepage.js';
import Chart1 from './js/components/chart1/chart1.js';
import Manage1 from './js/components/manage1/manage1.js';
import TableContainer from './js/containers/table.js';
import store from './js/store.js';

export default class Root extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router history = {hashHistory}>
					<Route path="/" component={Index}>
					<IndexRoute breadcrumbName='首页' name='首页' component={Homepage}/>
					<Route path="dashboard/dashboard1" breadcrumbName='统计1' name='统计1' component={Chart1}/>
					<Route path="dashboard/dashboard2" breadcrumbName='统计2' name='统计2' component={Homepage}/>
					<Route path="manage/manage1" breadcrumbName='列表1' name='列表1' component={Manage1}/>
					<Route path="manage/manage2" breadcrumbName='列表2' name='列表2' component={TableContainer}/>
					</Route>
				</Router>
			</Provider>
		);
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));
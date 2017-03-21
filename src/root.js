import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Index from './js/index.js';
import Homepage from './js/components/homepage/homepage.js';
// import Table1 from './js/components/table1';
// import Setting from './js/components/setting.js';
// import reducer from './js/reducers';
// const store = createStore(reducer)

export default class Root extends React.Component {
	render() {
		return (
		    <Router history = {hashHistory}>
		        <Route path="/" component={Index}>
			        <IndexRoute component={Homepage}/>
			        	<Route path="dashboard" component={Homepage}/>
			        	<Route path="server" component={Homepage}/>
				</Route>
		    </Router>
		)
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));
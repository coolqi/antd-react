import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Login from './js/components/login/login.js';
import Index from './js/containers/index.js';
import Homepage from './js/components/homepage/homepage.js';
import store from './js/store.js';

export default class Root extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router history = {hashHistory}>
					<Route path="/" component={Index}>
					<IndexRoute component={Homepage}/>
					<Route path="dashboard" component={Homepage}/>
							<Route path="server" component={Homepage}/>
					</Route>
				</Router>
			</Provider>
		);
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));
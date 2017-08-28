import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import Login from '../components/login/login.js';
import Sidebar from '../components/sidebar/sidebar.js';
import Header from '../components/header/header.js';
import store from '../store.js';

import loginActions from '../actions/login.js';

class Index extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loginStatus: false
		};
	}

	logOut() {
		console.log('halo');
		this.setState ({
			loginStatus: false
		});
		store.dispatch(loginActions.setLogin(0));
	}

	handleSubmit(username){
		store.dispatch(loginActions.setLogin(1)),
		store.dispatch(loginActions.setUsername(username));
		// alert(1111);
    // console.log('login status: ' + loginActions.getLogin());
    // console.log('header name: ' + loginActions.getUsername());
		this.setState({
			loginStatus: true
		});
	}

	render() {
		const bodyStyle = {
			marginTop: '20px',
			marginLeft: '250px',
			width: 'calc(100vw - 260px)',
		};

		if(!loginActions.getLogin()){
			return <Login handleSubmit={this.handleSubmit.bind(this)}/>;
		}

		const style = {
			height: '100%'
		};

		return (
			<div style={style}>
				<Sidebar />
				<Header username={loginActions.getUsername()} logOut={this.logOut.bind(this)}/>
				<div style={bodyStyle}>
					{this.props.children}
				</div>
			</div>  
		);
	}
}
export default Index;
// function mapStateToProps(state) {
// 	return {
// 		username: state.username,
// 		token: state.token
// 	};
// }

// function mapDispatchToProps(dispatch) {
// 	return {
// 		loginSuccess: () => dispatch(loginActions.setLogin()),
// 		setUsername: username => dispatch(loginActions.setUsername(username)),
// 		logOut: () => dispatch(loginActions.getLogout()),
// 	}
// }

// export default connect
// 	 (mapStateToProps,
// 	 mapDispatchToProps
// 	 )(Index);
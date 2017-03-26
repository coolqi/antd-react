import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import Login from '../components/login/login.js';
import Sidebar from '../components/sidebar/sidebar.js';
import Header from '../components/header/header.js';

import loginActions from '../actions/login.js';

class Index extends React.Component {
	constructor(props){
		super(props);
	}

	logOut() {
		console.log('halo');
	}

	handleSubmit(username){
		() => dispatch(loginActions.setUsername(username));
		username => dispatch(loginActions.setLogin());
    console.log('login status: ' + loginActions.getLogin());
    }

	render() {
		const { username, token, loginSuccess, setUsername } = this.props;

		const bodyStyle = {
			marginTop: "20px",
			marginLeft: "250px",
			width: "calc(100vw - 260px)",
		}
		if(!loginActions.getLogin()){
			// console.log('username: a' + username);
			return <Login handleSubmit={this.handleSubmit.bind(this)}/>
		} 
		const style = {
			height: "100%"
		}
		console.log('lala' + loginActions.getLogin());
		return (
			<div style={style}>
				<Sidebar />
				<Header username={state} logOut={this.logOut.bind(this)}/>
				<div style={bodyStyle}>
					{this.props.children}
				</div>
			</div>  
		)
	}
}

function mapStateToProps(state) {
	return {
		username: state.username,
		token: state.token
	};
}

function mapDispatchToProps(dispatch) {
	return {
		loginSuccess: () => dispatch(loginActions.setLogin()),
		setUsername: username => dispatch(loginActions.setUsername(username))
	}
}

export default connect
	 (mapStateToProps,
	 mapDispatchToProps
	 )(Index);
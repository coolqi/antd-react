import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login/login.js';
import Sidebar from './components/sidebar/sidebar.js';
import Header from './components/header/header.js';

export default class Index extends React.Component {
	constructor(){
		super();
		this.state = {
			username: 'qizy',
			token: '',
			loginStatus: false
		}
	}

	// componentDidMount() {
	// 	console.log('index: ' + this.state.username);
	// }

	loginSuccess(name) {
		this.setState({
			username: name,
			loginStatus: true
		})
	}

	logOut() {
		this.setState({
			loginStatus: false
		})
	}

	render() {
		const bodyStyle = {
			marginLeft: "190px",
			width: "calc(100vw - 205px)",
		}

		if(!this.state.loginStatus){
			return <Login loginSuccess={this.loginSuccess.bind(this)} username={this.state.username}/>
		} 
		const style = {
			height: "100%"
		}
		return (
			<div style={style}>
				<Sidebar />
				<Header username={this.state.username} logOut={this.logOut.bind(this)}/>
				<div style={bodyStyle}>
					{this.props.children}
				</div>
			</div>  
		)
	}
}


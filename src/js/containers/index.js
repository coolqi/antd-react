import React from 'react';
import { hashHistory } from 'react-router';
import { Breadcrumb, message } from 'antd';
import LoginContainer from './login.js';
import Sidebar from '../components/sidebar/sidebar.js';
import Header from '../components/header/header.js';

class Index extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			login: false
		};
	}

	handleLogin() {
		this.setState({
			login: true
		});
	}

	logOut() {
		this.setState({
			login: false
		});
		sessionStorage.removeItem('token');
		hashHistory.push('/');
		message.info('已登出');
	}

	render() {
		if(!sessionStorage.getItem('token')){
			return <LoginContainer handleLogin={this.handleLogin.bind(this)}/>;
		}

		const Homepage = () => (
			<div className='body-content'>
				<Breadcrumb routes={this.props.routes} params={this.props.params} />
				{ this.props.children }			
			</div>
		);

		return (
			<div className='body-all'>
				<Sidebar />
				<Header logOut={this.logOut.bind(this)}/>
				<Homepage />
			</div>  
		);
	}
}

export default Index;
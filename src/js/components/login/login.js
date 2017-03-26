import React from 'react';
import ReactDOM from 'react-dom';
import { Input, Icon, Button, message } from 'antd';
import "./login.css";

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
	}

	getUsername(e) {
		this.setState({
			username: e.target.value
		})
	};

	getPassword(e) {
		this.setState({
			password: e.target.value
		})
	}

	// login
	onClick(e) {
		e.preventDefault();
		// const username = ReactDOM.findDOMNode(this.refs.user).value;
		// const password = ReactDOM.findDOMNode(this.refs.passw).value;
		console.log('user: ' + this.state.username);
		console.log('password: ' + this.state.password);
		const username = this.state.username;
		const password = this.state.password;
		if (username && password) {
			if(true) {
				this.props.handleSubmit(username);
			} 
			else {
				message.info('虽然你登录成功了，但是没传给父组件');
			}
		} else {
			message.warning('Username and password are required!');
		}
	}


	render() {
		return (
			<div className="login-page">
				<center className="login-box">
					<div className="login-logo">
						<img src="../../../image/logo.svg" alt="懂你科技" />
					</div>
					<h2>LOGIN PAGE</h2>
					<Input 
						className="login-input"
						size="large"
						placeholder="username" 
						value={this.state.username}
						onChange = {this.getUsername.bind(this)}
						prefix={<Icon type="user" />} />
					<Input 
						type= "password"
						className="login-input"
						size="large"
						placeholder="password"
						value={this.state.password}
						onChange = {this.getPassword.bind(this)}
						prefix={<Icon type="lock" />} />
					<Button type="primary" onClick={this.onClick.bind(this)}>
					  登录
					  <span class="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
					</Button>
				</center>
			</div>
		)
	}
}

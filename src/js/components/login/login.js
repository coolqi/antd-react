import React from 'react';
import ReactDOM from 'react-dom';
import {Input, Icon, Button, message} from 'antd';
import { connect } from 'react-redux';
import './login.css';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}
	getUsername(e) {
		this.setState({
			username: e.target.value
		});
	}
	getPassword(e) {
		this.setState({
			password: e.target.value
		});
	}
	keyDown(e) {
		if(e.keyCode === 13) {
			event.returnValue = false;
			event.cancel = true;
			this.onClick(e);
		}
	}
	onClick(e) {
		e.preventDefault(); 
		const username = this.state.username;
		const password = this.state.password;
		if(username && password) {
			this.props.login(username, password);
		} else {
			message.warning('用户名和密码不可为空');
		}
	}
	render() {
		return (
			<div class="login-page">
				<center class="login-box">
					<div class="login-logo">
						<img src="../../../image/logo.svg" alt="后台管理系统" style={{height:60, width:60}} />
					</div>
					<h2>后台管理</h2>
						<Input
							className='login-input'
							size='large'
							placeholder='用户名'
							value={this.state.username}
							onChange={this.getUsername.bind(this)}
							prefix={<Icon type='user'/>}
							onPressEnter={this.keyDown.bind(this)}
						/>
						<Input
							type='password'
							className='login-input'
							size='large'
							placeholder='password'
							value={this.state.password}
							onChange={this.getPassword.bind(this)}
							prefix={<Icon type='lock'/>}
							onPressEnter={this.keyDown.bind(this)}
						/>
						<Button type='primary' onClick={this.onClick.bind(this)}>
							登录
						</Button>
				</center>
			</div>
		);
	}
}
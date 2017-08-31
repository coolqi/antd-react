import React from 'react';
import { Menu, Dropdown, Icon, message } from 'antd';
import './header.css';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	onClick() {
		this.props.logOut();
	}

	render() {
		const menu = (
		<Menu onClick={this.onClick.bind(this)}>
			<Menu.Item key="logOut">登出</Menu.Item> 				
		</Menu>
	);
		return (
		<div className="user-menu">
			<Dropdown overlay={menu} className="user-dropdown">
				<a className="user-link" href="#" >
					{sessionStorage.getItem('username')}<Icon type="down" />
				</a>
			</Dropdown>
		</div>
		);
	}
}

export default Header;
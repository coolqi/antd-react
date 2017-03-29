import React from 'react';
import { Menu, Dropdown, Icon, message } from 'antd';
import './header.css';
const SubMenu = Menu.SubMenu;

 class Header extends React.Component {
 	constructor(props) {
 		super(props);
 	}

 	onClick() {
 			this.props.logOut();
 			message.info('log out');
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
	 				<a className="user-link" href="#">
						{this.props.username}<Icon type="down" />
	 				</a>
	 			</Dropdown>
			</div>
 		)
 	}
 }

 export default Header;
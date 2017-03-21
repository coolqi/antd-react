import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';
import './sidebar.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sidebar extends React.Component {
	constructor() {
		super();
	};

	handleClick(e){
    	console.log('click ', e);
  	};

  render() {
    return (
      <div className="sidebar">
      	<div className="logo">
      		<img className="logo-image" src="../../../image/logo.svg" />
      		<h1 className="logo-title">IKNOW AI</h1>
      	</div>
      	<Menu
	        onClick={this.handleClick.bind(this)}
	        style={{ width: 240 }}
	        defaultSelectedKeys={['1']}
	        mode="inline"
	    >
	        <Menu.Item key="1">
	        	<Link to='/'><Icon type="mail" />主页</Link>
	        </Menu.Item>
	        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Dashboard</span></span>}>
	        	<Menu.Item key="2"><Link to="/dashboard">数据统计</Link></Menu.Item>
	        	<Menu.Item key="3"><Link to="/server">服务器状态</Link></Menu.Item>
	        </SubMenu>
	      </Menu>
      </div>

    );
  }
};

export default Sidebar;
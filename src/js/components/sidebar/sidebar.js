import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';
import './sidebar.css';
import menu from '../../api/menu.js';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class Sidebar extends React.Component {
	constructor() {
		super();
	}

	// handleClick(e){
		// console.log('click ', e);
	// }

	transformMenuItem(obj, paths) {
		const parentPath = paths.join('/');   // 将各级父目录组合成完整的路径
		return (
      <MenuItem key={obj.key}>
        {obj.child ? obj.name : <Link to={`/${parentPath}`}>{obj.name}</Link> }
      </MenuItem>
		);
	}

	// 在每次组件挂载的时候parse一次菜单, 不用每次render都解析
	componentWillMount() {
		const paths = [];  // 暂存各级路径, 当作stack用
		const defaultOpenKeys = [];
    // 菜单项是从配置中读取的, parse过程还是有点复杂的
		const menuItems = menu.map((level1) => {
      // parse一级菜单
			paths.push(level1.key);
			if (defaultOpenKeys.length === 0) {
				defaultOpenKeys.push(level1.key);  // 默认展开第一个菜单
			}
      // 是否有子菜单?
			if (level1.child) {
				const level2menu = level1.child.map((level2) => {
					// parse二级菜单
					paths.push(level2.key);
					const tmp = this.transformMenuItem(level2, paths);
					paths.pop();
					return tmp;
				});

				paths.pop();
				return (
					<SubMenu key={level1.key} title={<span>{level1.name}</span>}>
						{level2menu}
					</SubMenu>
				);
			}
      // 没有子菜单, 直接转换为MenuItem
			else {
				const tmp = this.transformMenuItem(level1, paths);
				paths.pop();  // return之前别忘了pop
				return tmp;
			}
		});
		this.menuItems = menuItems;
		this.defaultOpenKeys = defaultOpenKeys;
	}


	render() {
		return (
			<div className="sidebar">
				<div className="logo">
					<img className="logo-image" src="../../../image/logo.svg" />
					<h1 className="logo-title">管理系统</h1>
				</div>
				<Menu
				style={{ width: 240}}
				defaultSelectedKeys={['']}
				mode="inline"
				>
					{this.menuItems}
				</Menu>
      </div>
		);
	}
}

export default Sidebar;
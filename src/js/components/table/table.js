import React from 'react';
import { Table, Icon } from 'antd';

class Table1 extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.getTablelist();
	}

	render() {
		const columns = [{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: text => <a href="#">{text}</a>,
		}, {
			title: 'Age',
			dataIndex: 'age',
			key: 'age',
		}, {
			title: 'Address',
			dataIndex: 'address',
			key: 'address',
		}, {
			title: 'Action',
			key: 'action',
			render: (text, record) => (
				<span>
					<a href="#">Action 一 {record.name}</a>
					<span className="ant-divider" />
					<a href="#">Delete</a>
					<span className="ant-divider" />
					<a href="#" className="ant-dropdown-link">
						More actions <Icon type="down" />
					</a>
				</span>
			),
		}];
		
		let data = [];
		for(let i in this.props.tablelist) {
			data.push(this.props.tablelist[i]);
		}

		return (
			<Table columns={columns} dataSource={data} />
		);
	}
}

export default Table1;
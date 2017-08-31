import React from 'react';
export default class Homepage extends React.Component {
	render() {
		const style = {
			textAlign: 'center',
		};
		return (
			<h1 style={style}>欢迎回来，{sessionStorage.getItem('username')}</h1>
		);
	}
}
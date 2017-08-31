import React from 'react';
export default class Homepage extends React.Component {
	render() {
		return (
			<h1>欢迎回来，{sessionStorage.getItem('username')}</h1>
		);
	}
}
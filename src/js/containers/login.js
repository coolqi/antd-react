import Login from '../components/login/login.js';
import { message } from 'antd';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch, props) {
	return {
		login: (name, pwd) => {
			sessionStorage.setItem('token', pwd);
			sessionStorage.setItem('username', name);
			props.handleLogin();
			message.info('登录成功');
		}
	};
}

const LoginContainer = connect(
	mapDispatchToProps
)(Login);
export default LoginContainer;
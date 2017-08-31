require('isomorphic-fetch');
require('es6-promise').polyfill();

const LoginFetch = function(name, pwd, cb1, cb2) {
	fetch('', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username: name,
			password: pwd
		})
	})
	.then(cb1)
	.then(cb2);
};

export default LoginFetch;
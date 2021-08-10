'use strict';

var internals = {},
	config = require('../config');

//Validate token here
internals.validate = async (decodedToken, req, h) => {
	// return User.findById(decodedToken.id)
	// 	.then(res => ({ isValid: true, credentials: res }))
	// 	.catch(err => ({ isValid: false, credentials: {} }))
};

internals.setAuthStrategy = async function (server) {
	await server.register(require('@hapi/cookie'));

	server.auth.strategy('standard', 'cookie', {
		cookie: {
			name: 'auth-cookie',
			password: '1234',
			isSecure: false,
			ttl: (1000 * 60 * 60 * 24) / 24,
		},
		redirectTo: '/log-in?alert=expired',
		appendNext: true,
	});

	server.auth.default('standard');
};

module.exports = {
	setStrategy: internals.setAuthStrategy,
};

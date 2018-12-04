const app = require('../userService');

module.exports = {
	getUser,
	registerUser,
	authenticateUser
}

function getUser(req, res, next) {
	app.getUser(req.params.name).then(userData => res.send(userData));
	return 'getUser';
}

function registerUser(req, res, next) {
	app.registerUser(req.body).then(added => res.send(added));
	return 'registerUser';
}

function authenticateUser(req, res, next) {
	app.authenticateUser(req.body).then(session => res.send(session.getToken()));
	return 'authenticateUser';
}

/*
app.registerAction({
		initiator: {
			type: 'http',
			request: req,
			response: res
			},
		context: this,
		permissionNeeded: true,
		execution: route.getUser
	})

	*/
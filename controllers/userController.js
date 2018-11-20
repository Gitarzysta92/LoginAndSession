const app = require('../core/userService');

module.exports = {
	getUser,
	registerUser,
	authenticateUser
}

 function getUser(req, res, next) {
	app.getUser(req.params.name).then(userData => res.send(userData));
}

function registerUser(req, res, next) {
	app.registerUser(req.body).then(res => res.end("User added"));
}

function authenticateUser(req, res, next) {
	app.authenticateUser(req.body).then(session => res.send(session.getToken()));
}
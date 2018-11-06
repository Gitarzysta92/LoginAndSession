const task = require('../core/userService');

module.exports = {
	user,
	register
}

function user(req, res, next) {
	task.getUser(req.params.login);
	res.end("asd")
}

function register(req, res, next) {
	task.registerUser(req.body);
	res.end("User added");
}

const app = require('../core/userService');

module.exports = {
	getUser,
	registerUser,
	loginUser
}

 function getUser(req, res, next) {
	app.getUser(req.params.name).then(x => console.log(x));
	res.end();
}

function registerUser(req, res, next) {
	app.registerUser(req.body);
	res.end("User added");
}


function loginUser(req, res, next) {
	app.getUser();
}
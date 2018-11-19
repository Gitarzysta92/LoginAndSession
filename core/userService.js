const db = require('../core').dbMethods;
const assert = require('assert');


module.exports = {
	getUser,
	registerUser
};

async function getUser(login) {
	const result = await db.getSingle({login: login}, 'inserts');
	return result;
}

// need user object
// example { login: string, password: string }
function registerUser(userParam) {
	db.registerUser(userParam);
}

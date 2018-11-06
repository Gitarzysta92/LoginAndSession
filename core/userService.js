const app = require('../core');
const assert = require('assert');
let userDB = [];
const test = 'string';

module.exports = {
	getUser,
	registerUser
};


function getUser(login) {
	//db.getSingle({login: login}, 'inserts', result => console.log(result));
		//const imported = db.met();
		console.log(app);
		//db.met().then(db => console.log(db));
}

// need user object
// example { login: string, password: string }
function registerUser(userParam) {
	
}



function uniqueId(length){
	let signs = 'ABCDEFGHIJKOPRST123456789',
		id = [];

	for (let i = 0; i < length; i++) {
		let rand = Math.floor(Math.random() * signs.length);
		id.push(signs.charAt(rand));
	}

	return id.join('');
}
//const app = require('../core');
//const tab = [];
//const assert = require('assert');
//let userDB = [];
//const test = 'string';


module.exports = function()  {

	return this
	
}
	


	
/*

return function getSingle(db, key, colName, callback) {
		
		db.then(db => {
			let col = db.collection(colName).findOne(key);
			return col; 
		}).then(col => {
			callback(col);
		}).catch(err => console.log(err));
	
	}



// need user object
// example { login: string, password: string }
function registerUser(userParam) {
	let user = {
		id: uniqueId(10),
		login: userParam.login,
		password: userParam.password
	}
	userDB.push(user);
db.then(db => {
	let r = db.collection('inserts').insertOne({
		id: uniqueId(10),
		login: userParam.login,
		password: userParam.password
	});
}).catch(err => console.log(err));

	

	
}



function uniqueId(length){
	let signs = 'ABCDEFGHIJKOPRST123456789',
		id = [];

	for (let i = 0; i < length; i++) {
		let rand = Math.floor(Math.random() * signs.length);
		id.push(signs.charAt(rand));
	}

	return id.join('');
}*/
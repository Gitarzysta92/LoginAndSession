let userDB = [];

module.exports = {
	getUser,
	registerUser
};


function getUser(login) {
	return userDB.find( usr => usr.login === login)
}

// need user object
// example { login: string, password: string }
function registerUser(userParam) {
	let user = {
		id: uniqueId(10),
		login: userParam.login,
		password: userParam.password,
	}
	userDB.push(user);
	console.log(userDB);
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
const db = require('../core').dbMethods;
const assert = require('assert');
const userCollection = 'users'

module.exports = {
	getUser,
	registerUser,
	authenticateUser
};

async function getUser(username) {
	const result = await db.getSingle({username}, userCollection);
	return result;
}

// need user object
// example { login: string, password: string }

// TO DO - hash password before database insert
function registerUser(userParam) {
	db.insertSingle(userParam, userCollection);
}


// TO DO - create password and hash compare function
async function authenticateUser({username, password}) {
	const request = await db.getSingle({username}, userCollection);

	if (request.username && compare(request.password, password)) {
		const session = new userSession(request.id);
		return session;
	} else {
		console.log('Invalid login or password')
	}
}



class userSession {
	constructor(userID) {
		this.initDate = Date.now();
		this.expiryDate = this.initDate;
		this.token = {
			user_id: userID,
			token_id: uniqueId(10),
			exp_date: this.expiryDate
		}
	}

	getToken() {
		this.expiry();
		return this.token;
	}

	expiry() {
		this.timer = setInterval(() => {
			if (this.expiryDate > this.initDate + 10000) {
				console.log(this, 'destroyed')
				this.destroy();
			}
			this.expiryDate += 1000;
		}, 1000);

	}

	destroy() {
		clearInterval(this.timer);

	}
}



function compare(a, b) {
	return a === b ? true : false;
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
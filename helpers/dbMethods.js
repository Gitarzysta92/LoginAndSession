

module.exports = function(db) {
	return {
		getSingle: async function(key, colName) {
			const database = await db;
			return database.collection(colName).findOne(key);
		},

		insertSingle: function(userParam, colName) {
			db.then(db => {
				let r = db.collection(colName).insertOne({
					id: uniqueId(10),
					username: userParam.login,
					password: userParam.password
				});
			}).catch(err => console.log(err));
		}
	}
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
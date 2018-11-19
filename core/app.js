const db_instance = require('../helpers/db.js');
const db_methods = require('../helpers/dbMethods.js');
const fs = require('fs');
const path = require('path');



class App {
	constructor(args) {
		this.db = db_instance;
		this.dbMethods = db_methods(this.db);
	}


	rootDir(dir) {
		this.root_dir = dir;
	}
}




module.exports = (function() {
		const app = new App();
		return app;
})();




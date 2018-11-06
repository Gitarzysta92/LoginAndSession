const db_instance = require('../helpers/db.js');
const db_methods = require('../helpers/dbMethods.js');

class App {
	constructor() {
		this.db = db_instance;
		this.method = db_methods.bind(this);
	}

	met() {	
		//return this.db.then(db =>  db);
		return this.method;
	}
}


const myapp = (function() {
	this.instance = false;
	function createInstance() {
		const app = new App();
		return app;
	}
	if (this.init) {
		console.log(this.hasOwnProperty(init));
	}	
	if (!this.instance) {
		console.log('first execution');
		return {
			init: function() {
					this.instance = createInstance();
					delete this.init;
				}
		}
	} else {
		return 'second time';
	}
})();

module.exports = myapp;
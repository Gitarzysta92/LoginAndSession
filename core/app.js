const db_instance = require('../helpers/db.js');
const db_methods = require('../helpers/dbMethods.js');
const methods = require('../helpers/methods.js');
const fs = require('fs');
const path = require('path');

class App {
	constructor(args) {
		this.root_dir = args[0];
		this.db = db_instance;
		this.method = db_methods.bind(this);
		this.methods = methods;

		this.modules = ['helpers'];
	}

	met() {
		
		//return this.db.then(db =>  db);
		return this.method;
	}

	registerModules() {
		const items = [];
		//console.log(this.root_dir)
		//console.log(require.main);
		this.readFolder(this.root_dir)
			.then(items => this.compareArrays(items))
			.then(items => this.modules = items)
			.then(items => this.findModules(items))
			.then(items => console.log(items));
		
	}

	compareArrays(arr) {
		const finalarray = [];

		this.modules.forEach((module) => 
			arr.forEach((file) => { 
				if (module === file) {
					finalarray.push(module);
				}
			}) 
		)
		return finalarray;
	}

	readFolder(folderDir) {
		let list = new Promise((resolve, reject) => {
			fs.readdir(folderDir, function(err, items){
				resolve(items);
				reject(err)
			});
		});
		return list;
	}

	findModules(items) {
		const found = ['asd']
		items.forEach(item => {
			const dir = this.root_dir;

			 this.readFolder(path.resolve(dir, item))
				.then(item => {
					//const modulePath = path.resolve()
					found.push(item); 
					console.log(item);
				});
		})
		return found;
	}

}






module.exports = (function() {
	
	this.app;


	function createInstance(args) {
		const app = new App(args);
		return app;
	}


	return {
		init: function(...args) {
				this.app = createInstance(args);
				this.app.registerModules();
				delete this.init;
			}
	}

})();

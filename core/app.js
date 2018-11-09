const db_instance = require('../helpers/db.js');
const db_methods = require('../helpers/dbMethods.js');
const methods = require('../helpers/methods.js');
const fs = require('fs');
const path = require('path');


class DirMap {
	constructor(startDir) {
		this.directory = startDir;
		this.dirModel = [];
		this.walkerPromises = [];
	
		this.walker(this.directory);
		//Promise.all(this.walkerPromises).then(x => console.log(x));
	}
/*
	async recursiveDirWalker() {
		const self = this;
		await function recursiveWalker(directory) {
			const injectDir = directory;
			const initPromise = new Promise((resolve, reject) => {
				walker(resolve)	
			});
			return readPromise;
		}
	}
*/
	walker(directory) {
		fs.readdir(directory, (err, result) => {
			if (err) {
				throw err;
			} else {
				result.forEach((item, arr, key) => {
					const currentPath = path.resolve(directory, item); 
					const checkDir = new Promise((resolve, reject) => {
						fs.stat(currentPath, (err, stats) => {
							if (err) {
								reject(err)
							} else {
								if (stats.isDirectory() && this.dirValidation(currentPath)) {
									resolve(currentPath);
									this.dirModel.push(currentPath);
									//this.recursiveDirWalker(currentPath);
								} else if(stats.isFile()) {
									this.dirModel.push(currentPath);
									resolve(currentPath);
									//this.recursiveDirWalker();
								} 
							}
						});
					}).then(x => console.log(this));
					
					//if (Object.is(arr.length -1, key)) {
					//	resolve(this.dirModel);
					//}
				});
			}
		});	
	}
		

	dirValidation(directory) {
		const node = /(node_modules|\.git)$/i;
		return !node.test(directory);
	}

	fileValidation() {
		const file = /as$/;
		return !file.test(filePath);
	}

}





class App {
	constructor(args) {
		this.root_dir = args[0];
		this.db = db_instance;
		this.method = db_methods.bind(this);
		this.methods = methods;

		this.modules = new DirMap(this.root_dir);

		//console.log(this.modules.dirModel);

	}

	met() {
		
		//return this.db.then(db =>  db);
		return this.method;
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
				this.app.modules

				delete this.init;
			}
	}

})();



/*

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
					//console.log(item);
				});
		})
		return found;
	}

*/
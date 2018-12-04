
// Helpers
const db_instance = require('../helpers/db.js');
const db_methods = require('../helpers/dbMethods.js');

// Modules
const userService = require('./userService');

// Globals
const globalRouter = require('../routes/globalRouter.js')

// Utils
const fs = require('fs');
const path = require('path');


class App {
	constructor(args) {
		this.db = db_instance;
		this.dbMethods = db_methods(this.db);
		this.router = new globalRouter;
		this.executionStack = new ExecutionStack();

		this.registerRoute(userService.routes);
		console.log(this.router.routes);
	}

	registerRoute(route) {
		if (route.getUser) {
			this.router.register(route.getUser);	
			console.log(route.getUser);
		}
	}


	registerAction(parameters) {
		this.executionStack.add(parameters);
	}


	rootDir(dir) {
		this.root_dir = dir;
	}
}


class ExecutionStack {
	constructor() {
		this.list = [];
	}

	add(actionObject) {
		this.list.push(new SingleAction(actionObject));
	}

}


class SingleAction {
	constructor(action) {
		this.initiator = action.initiator || null;
		this.context = action.context || null;
		this.execution = action.execution || null;
		this.permission = action.permissionNeeded;
		this.selfExecution();
	}

	selfExecution() {
		if (this.initiator.request.headers && this.permission) {
			let obj = userSession.list().find(obj => obj.token.user_id);
			console.log(obj.token.token_id === this.initiator.request.headers.token);
			console.log('access denied');
			this.execution(this.initiator.request, this.initiator.response);
		} else {
			this.execution(this.initiator.request, this.initiator.response);
			console.log('access granted');
		}
		//console.log(userSession.list());
	}
}






module.exports = (function() {
		const app = new App();
		return app;
})();




var express = require('express'),
	server = express();



module.exports = class GlobalRouter {
	constructor() {
		this.routes = [];	
	}

	register({type, endpoint, callback}) {
		this.routes.push({
			type,
			endpoint,
			callback
		})
	}

	}

	

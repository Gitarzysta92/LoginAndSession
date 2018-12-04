var fs = require('fs'),
	bodyParser = require('body-parser'),
	errorHandler = require('../helpers/errorHandler'),
	globalRouter = require('../core');

module.exports = (server) => {
	server.use(bodyParser.urlencoded({ extended: false }));
	server.use(bodyParser.json());
	//app.use(errorHandler);
	server.use('/', globalRouter.routes);
	return app;
}
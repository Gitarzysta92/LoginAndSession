var fs = require('fs'),
	bodyParser = require('body-parser'),
	errorHandler = require('../helpers/errorHandler'),
	user = require('../routes/userRoutes');

module.exports = (app) => {
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	//app.use(errorHandler);
	app.use('/user', user);
	return app;
}
var express = require('express'),
	app = express(),
	config = require('./config');

app = config(app);

module.exports.run = (port) => {
	app.listen(port, () => console.log('Server listening on port ' + port));
};







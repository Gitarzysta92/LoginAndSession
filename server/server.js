var express = require('express'),
	server = express(),
	config = require('./config');



module.exports.run = (port) => {
		server.listen(port, () => console.log('Server listening on port ' + port));
};

	





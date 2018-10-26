const server = require('./server/server'),
	port = process.env.NODE_ENV === 'production' ? 80 : 3000;
server.run(port);

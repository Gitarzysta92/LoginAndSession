const route = require('../controllers/userController'),
	express = require('express'),
	router = express.Router();

// middleware specific for this router
router.use(function timeLog (req, res, next) {
	console.log('Time', Date.now())
	next()
});


router.get('/:name', route.getUser);
router.post('/register', route.registerUser);
router.post('/authenticate', route.authenticateUser);

//router.post('/login', route.loginUser);

module.exports = router;

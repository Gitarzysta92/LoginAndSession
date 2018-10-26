const route = require('../controllers/userController'),
	express = require('express'),
	router = express.Router();

// middleware specific for this router
router.use(function timeLog (req, res, next) {
	console.log('Time', Date.now())
	next()
});


router.get('/:login', route.user);
router.post('/register', route.register);

module.exports = router;

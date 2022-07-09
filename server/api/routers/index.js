var express = require('express');
var router = express.Router();
const authnMiddleWare = require('../middleware/auth.middleware')

/* GET home page. */
router.get('/', async (req, res, next) => {
	const token = await authnMiddleWare.genToken();
	res.render('index', { title: 'Express', auth: token });
});

module.exports = router;

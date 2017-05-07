var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if (!req.session.userName) {
		res.redirect('/login');
	}
  res.render('index', { userName: req.session.userName });
});

router.get('/login', function(req, res) {
	res.render('login');
});

router.post('/create', function(req, res) {
	req.session.userName = req.body.userName;
	res.redirect('/');
});

router.get('/logout', function(req, res) {
	req.session.destroy();
	console.log('deleted session');
	res.redirect('/');
})

module.exports = router;

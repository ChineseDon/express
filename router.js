var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) => {
	console.log("time is :" + Date.now());
	next();
})

router.get('/', (req, res) => {
	console.log('连接已经建立')
	res.send('hello bird')
})

module.exports = router;

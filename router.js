var express = require('express');
var router = express.Router();

<<<<<<< HEAD
router.use(function timeLog(req, res, next) => {
	console.log("time is :" + Date.now());
	next();
})

=======
>>>>>>> 63713b83d4cd55e542b2677706311b9c663866c1
router.get('/', (req, res) => {
	console.log('连接已经建立')
	res.send('hello bird')
})

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 63713b83d4cd55e542b2677706311b9c663866c1

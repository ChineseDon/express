var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	console.log('连接已经建立')
	res.send('hello bird')
})

module.exports = router;
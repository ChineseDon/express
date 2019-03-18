var express = require('express');
var router = express.Router();

var liuyan = [
	{
		id: 1,
		name: '张三',
		content: '1231231'
	},
	{
		id: 2,
		name: '张三a',
		content: '1231231asdfa'
	},
	{
		id: 3,
		name: '张三b',
		content: '1231231dsdd'
	},
	{
		id: 4,
		name: '张三c',
		content: '1231231asdfa'
	}
]

router.use(function timeLog(req, res, next) {
	console.log("time is :" + Date.now());
	next();
})

router.get('/', (req, res) => {
	console.log('连接已经建立')
	res.render('index.html', {
		liuyan: liuyan
	})
})

router.get('/add', (req, res) => {
	res.render('add.html');
})

module.exports = router;

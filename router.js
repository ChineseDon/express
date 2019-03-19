var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// body-parser配置
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

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

router.get('/addLiuyan', (req, res) => {
	console.log(req.query);
	liuyan.push({
		id: liuyan.length + 1,
		name: req.query.name,
		content: req.query.liuyan
	})
	res.redirect('/')
})

router.get('/delete/:id', (req, res) => {
	console.log(req.params.id)
	if(req.params.id) {
		liuyan.splice(req.params.id-1, 1)
		console.log(liuyan)
		res.redirect('/');
	} else {
		res.end('404')
	}
})

router.get('/edit/:id', (req, res) => {
	console.log(req.params.id)
	var liuyanUser = liuyan.filter((item, index) => {
		console.log(item)
		return item.id == req.params.id;
	})
	console.log(liuyanUser)
	res.render('edit.html', {
		liuyan: liuyanUser[0]
	})
})

router.post('/post', urlencodedParser, (req, res) => {
	console.log(req.body);
	var editContent = req.body;
	var index = liuyan.findIndex((item, index) => {
		return req.body.id == item.id;
	})
	console.log(index);
	liuyan.splice(index, 1, editContent);
	console.log(liuyan);
	res.redirect('/')
})

module.exports = router;

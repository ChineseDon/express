var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const connect = require('./../config/sql');

// body-parser配置
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.use(function timeLog(req, res, next) {
	console.log("time is :" + Date.now());
	next();
})

router.get('/', (req, res) => {
	console.log('连接已经建立')
	connect.query('select * from liuyan where 1=1', function(err, data) {
		res.render('./index.html', {
			liuyan: data
		})
	})
	
})

router.get('/add', (req, res) => {
	res.render('add.html');
})

router.get('/addLiuyan', (req, res) => {
	console.log(req.query);
	var data = [req.query.name, req.query.liuyan]
	connect.query('INSERT INTO liuyan(name, content) VALUES(?, ?)', data, function(err, results) {
		console.log(results)
		console.log(err)
		if (err) {
			res.send('404')
		}
		res.redirect('/')
	})
})

router.get('/delete/:id', (req, res) => {
	console.log(req.params.id)
	if(req.params.id) {
		connect.query('delete from liuyan where id = ?', req.params.id, function(err, results) {
			console.log(results)
			console.log(err)
			if (err) {
				res.send('404')
			}
			res.redirect('/')
		})
	} else {
		res.end('404')
	}
})

router.get('/edit/:id', (req, res) => {
	console.log(req.params.id)
	connect.query('select * from liuyan where id = ?', req.params.id, function(err, results) {
		if (err) {
			res.send('404')
		}
		console.log(results)
		res.render('edit.html', {
			liuyan: results[0]
		})
	})
	
})

router.post('/post', urlencodedParser, (req, res) => {
	console.log(req.body);
// 	var editContent = req.body;
// 	var index = liuyan.findIndex((item, index) => {
// 		return req.body.id == item.id;
// 	})
// 	console.log(index);
// 	liuyan.splice(index, 1, editContent);
// 	console.log(liuyan);
// 	res.redirect('/')
	connect.query('update liuyan set name = ?, content = ? where id = ?', [req.body.name, req.body.content, req.body.id], function(err, results) {
		if (err) {
			res.send('404')
		}
		console.log(results)
		res.redirect('/')
// 		res.render('edit.html', {
// 			liuyan: results[0]
// 		})
	})
})

module.exports = router;

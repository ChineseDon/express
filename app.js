var express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.send('hello express');
})

app.all('/secret', (req, res, next) => {
	console.log('secret 连接已建立...');
	next();
	res.send('secret 连接建立成功...')
})

app.get('/post', (req, res) => {
	console.log(req.url);
	console.log(req.params)
	console.log(req.query);
	res.send('接受参数成功');
})

app.listen('3000', () => {
	console.log('连接已建立');
})
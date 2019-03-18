var express = require('express');
var app = express();
var router = require('./router');
/* 路由 */
app.use(router);

app.listen('3000', () => {
	console.log('连接已建立');
})

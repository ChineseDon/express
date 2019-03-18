var express = require('express');
var app = express();
var router = require('./router');

// 配置art-template
app.engine('html', require('express-art-template'));

// 静态资源设置
app.use('/public/', express.static('./public/'));

/* 路由 */
app.use(router);

app.listen('3000', () => {
	console.log('连接已建立');
})

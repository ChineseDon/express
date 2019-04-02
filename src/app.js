const path = require('path');
const express = require('express');
const mysql = require('./config/sql');
const app = express();
const router = require('./router');

// 配置art-template
app.engine('html', require('express-art-template'));

// 静态资源设置
app.use('/public/', express.static('./src/public/'));

//设置模板相对路径（相对当前目录）
app.set('views', path.join(__dirname, '/views')); 

/* 路由 */
app.use(router);

app.listen('3000', () => {
	console.log('连接已建立');
})

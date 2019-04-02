const mysql = require('mysql');

const connection = mysql.createConnection({
	host: '127.0.0.1',
	port:'3306',
    user:'root',
    password:'123456',
    database:'demo'
})

connection.connect(function() {
	console.log("数据库连接成功")
});

module.exports = connection;

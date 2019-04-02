const connect = require('./sql');

console.log(connect)

function getData(sql, value, callback) {
	connect.query(sql, value, (err, results) => {
		if(err) {
			callback(err)
		}
		callback(results);
	})
}

module.exports = getData;


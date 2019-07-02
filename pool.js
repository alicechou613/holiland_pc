//引入mysql模块
const mysql=require('mysql');
//创建连接池对象
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'8080',
	user:'root',
	password:'',
	database:'holiland',
	connectionLimit:20
});
//导出连接池对象
module.exports=pool;

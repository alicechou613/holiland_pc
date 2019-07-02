const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由
//1.注册页面
router.post('/reg',function(req,res){
	var obj=req.body;
	console.log(obj);
	console.log('333');
	res.send('555');
})




module.exports=router;
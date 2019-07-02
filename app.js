const express=require('express');
//引入路由器
const userRouter=require('./routes/user.js');
//const productRouter=require('./routes/product.js');
//const myRouter=require('./routes/my.js');
//引入中间件
const bodyParser=require('body-parser');
//创建web服务器
var server=express();
server.listen(8080);
//托管静态资源到public下
server.use(express.static('public'));
server.use(express.static('images'));
//使用body-parser中间件，将post请求的数据格式化为对象
server.use(bodyParser.urlencoded({
		extended:false
}));
//使用路由器  挂载
server.use('/user',userRouter);
//server.use('/product',productRouter);
//server.use('/my',myRouter);

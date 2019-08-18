// nodeJS中间件服务器
//引入
var express=require('express');
var app=express();

//解决跨域问题,网上很多，直接拷贝就可以了
app.all('*',function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Headers","x-Requested-Width");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",'3.2.1')
	res.header("Countent-Type","application/json;charset=utf-8");
	next();
});

//获得可拖动按钮列表的接口
app.get('/get_tabbtn_list',function(req,res){
	var tabBtnList=['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','全球特色'];
	res.send(tabBtnList);
	
	
});
app.listen(5632,function(){
	console.log('5632,网易严选中间件已经运行');
});
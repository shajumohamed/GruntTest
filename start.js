var express=require("express");
var app=express();
app.get('*',function(req,res){
	res.send("abcd from expess");
});
app.listen(9002);
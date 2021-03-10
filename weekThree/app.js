//匯入express模組
var express= require('express');

//建立伺服器
var app=express();

//伺服器位置的名稱 最後網址為http://localhost:3000/
const hostName = 'localhost';
const port = 3000;


app.get ('/',function(req, res){
    res.statusCode = 300;
    res.setHeader = ('content-Type','text/html');
    res.end('<h1> Week Three!!!</h1>')
});

// app.get ('/getData',function(req, res){
//     res.statusCode = 300;
//     res.end('<h1>Lack of Parameter</h1>')
//     let number = req.query.page;
    

// });

app.get('/getData', function (req, res){
    var result;
    if(isNaN(req.query.number)){
        result = 'Wrong Parameter'
    } else{
        //梯形公式
        result = ((1+Number(req.query.number))*Number(req.query.number))/2;
    }
    res.send(`${result}`)
});

//監聽3000埠
const server= app.listen(port, function() {
	var host = server.address().address
    var port = server.address().port

    console.log('伺服器建立成功')
});
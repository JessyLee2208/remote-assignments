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
    var result = req.query.number;
    console.log(result)
    
    if(result == undefined ){
        result = 'Lack of Parameter'
    } else if(isNaN(result)) {
        //梯形公式
        result = 'Wrong Parameter'
    } else{
        result = ((1+Number(result))*Number(result))/2;
    }
    res.send(`${result}`)
});

app.get ('/myName',function(req, res){
    res.send('<h1>hihihih</h1>')
});


app.use('/public', express.static('public'));

app.get ('/sum.html',function(req, res){
    res.sendFile( __dirname + "/" + "sum.html" );
});

//監聽3000埠
const server= app.listen(port, function() {
	var host = server.address().address
    var port = server.address().port

    console.log('伺服器建立成功')
});
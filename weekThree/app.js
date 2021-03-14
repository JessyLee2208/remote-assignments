//匯入express模組
var express= require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//建立伺服器
var app=express();

app.use('/public', express.static('public'));

app.set('view engine','pug');
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());


//伺服器位置的名稱 最後網址為http://localhost:3000/
const hostName = 'localhost';
const port = 3000;

//Assignment 1: Your First Web Server
app.get ('/',function(req, res){
    res.statusCode = 300;
    res.setHeader = ('content-Type','text/html');
    res.end('<h1> Week Three!!!</h1>')
});

//Assignment 2: Build Backend API for Front-End

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


//Assignment 3: Connect to Backend API by AJAX

app.get ('/sum.html',(req, res)=> {
    res.sendFile( __dirname + "/" + "sum.html" );
});


//Assignment 4: HTTP Cookie (Advanced Optional)

app.get('/trackName',(req, res)=> {
    
    const name = req.cookies.username
    res.render('trackName', {name}); 

});


app.get('/myName',(req, res)=> {
    const name = req.cookies.username

    if(name == undefined){
        res.render('myName', {name});
    } else {
        res.render('trackName', {name});
    }

});

app.post('/myName',(req, res)=> {
    
    const name = req.body.username;
    res.cookie('username', req.body.username);
    res.redirect('/myName');
    
});





//監聽3000埠
const server= app.listen(port, function() {
	var host = server.address().address
    var port = server.address().port

    console.log('伺服器建立成功')
});
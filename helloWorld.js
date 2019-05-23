var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);


/*
const express = require('express');
const app = express()

console.log(process.argv[2]);
app.get('/', function (req, res) {
  res.send('Hello World')
});
 
app.listen(process.argv[2]);
*/
const express = require('express');
const pug = require('pug');
const pugFile = process.argv[3];

const app = express();


app.set('view engine', 'pug');

app.get('/home', function(req, res) {
	res.render(pugFile, {date: new Date().toDateString()})
});
app.listen(process.argv[2]);

/*---Resources: 
https://expressjs.com/en/guide/using-template-engines.html
https://pugjs.org/api/getting-started.html

-----------Alternate Solution-----------

const express = require('express')
const app = express()
app.set('view engine', 'pug')
app.set('views', process.argv[3])
app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])

*/
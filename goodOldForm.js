const express = require('express');
//const pug = require('pug');
const bodyparser = require('body-parser');
const port = process.argv[2];

const app = express();

//app.set('view engine', 'pug');
app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
	res.end(req.body.str.split('').reverse().join(''));
});
app.listen(port);


/*---------alternate solution-----------

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])


*/
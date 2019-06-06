const express = require('express');
const port = process.argv[2];

const app = express();

app.get('/search', (req, res) => {
	const object = req.query;
	res.send(object);
});
app.listen(port);

/*---------ALternate Solution---------

const express = require('express')
const app = express()

app.get('/search', function(req, res){
  const query = req.query
  res.send(query)
})

app.listen(process.argv[2])

*/
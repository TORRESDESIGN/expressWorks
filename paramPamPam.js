const express = require('express');
const port = process.argv[2];

const app = express();

app.put('/message/:id', (req, res) => {
	var id = req.params.id;
	res.send(require('crypto')
		.createHash('sha1')
		.update(new Date().toDateString() + id)
		.digest('hex'));
});
app.listen(port);

/*-------------Alternate Solution---------

const express = require('express')
const app = express()

app.put('/message/:id', function(req, res){
  const id = req.params.id
  const str = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  res.send(str)
})

app.listen(process.argv[2])

*/
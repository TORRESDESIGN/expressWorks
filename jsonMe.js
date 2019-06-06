const express = require('express');
const fs = require('fs');
const port = process.argv[2];
let file = process.argv[3];

const app = express();

app.get('/books', (req, res) => {
	fs.readFile(file, (error, data) => {
		if(error) {
			console.log(error);
		} else {
			var object = JSON.parse(data);
			res.json(object);
		}
	});
	

});
app.listen(port);

/*----------------Alternate Solution-------

const express = require('express')
const app = express()
const fs = require('fs')

app.get('/books', function(req, res){
  const filename = process.argv[3]
  fs.readFile(filename, function(e, data) {
    if (e) return res.sendStatus(500)
    try {
      books = JSON.parse(data)
    } catch (e) {
      res.sendStatus(500)
    }
    res.json(books)
  })
})

app.listen(process.argv[2])


*/
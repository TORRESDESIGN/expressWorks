const express = require('express');
const app = express();

const port = process.argv[2];
const htmlFile = process.argv[3];

app.use(require('stylus').middleware(htmlFile));
app.use(express.static(htmlFile));


app.listen(port);

/*
Resources:
https://github.com/stylus/stylus
https://www.npmjs.com/package/express-stylus
http://stylus-lang.com/docs/middleware.html

------------Alternate Solution-------------

const express = require('express')
const app = express()

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));


app.listen(process.argv[2])


*/
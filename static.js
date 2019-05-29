const express = require('express');
const app = express();

const port = process.argv[2];
const htmlFile = process.argv[3];

app.use(express.static(htmlFile));
app.listen(port);


/*---------Alterante solution----

const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2])

*/
const express = require('express');
const pug = require('pug');
const pugFile = process.argv[3];

const app = express();


app.set('views', pugFile);

/*---Resources: 
https://expressjs.com/en/guide/using-template-engines.html
https://pugjs.org/api/getting-started.html

*/
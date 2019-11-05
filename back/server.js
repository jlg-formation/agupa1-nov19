const express = require('express');
const serveIndex = require('serve-index');


const app = express();

app.use(express.static('.'));
app.use(serveIndex('.', { 'icons': true }));

const port = 3000;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

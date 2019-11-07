const express = require('express');
const serveIndex = require('serve-index');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.json());

let store = {};
try {
  const str = fs.readFileSync('data.json', { encoding: 'utf8' });
  store = JSON.parse(str);
} catch (err) {}

app.get('/ws/quizz', (req, res, next) => {
  res.json(store);
});


app.post('/ws/quizz', (req, res, next) => {
  store[req.body.name] = req.body;
  fs.writeFileSync('data.json', JSON.stringify(store));
  res.status(204).end();
});

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

const port = 3000;
app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`);
});

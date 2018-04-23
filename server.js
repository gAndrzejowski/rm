const express = require('express');
const app = express(),
root = './';

app.get('/dist/bundle.js', (req, res) => {
  res.sendFile('dist/bundle.js', {root});
});
app.get('/', (req, res) => {
  res.sendFile('index.html',{root});
});

app.listen(3003);

const express = require('express');
const app = express(),
root = './';

app.get('*/dist/:fileName', (req, res) => {
  res.sendFile(`dist/${req.params.fileName}`, {root});
});
app.get('*', (req, res) => {
  res.sendFile('index.html', {root});
});
console.log("Awaiting requests @ http://localhost:3003")
app.listen(3003);

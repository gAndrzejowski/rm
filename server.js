const express = require('express');
require('isomorphic-fetch');

const app = express();
const root = './';

app.get('*/dist/:fileName', (req, res) => {
  res.sendFile(`dist/${req.params.fileName}`, { root });
});
app.get('*/img/:fileName', (req,res) => {
  res.sendFile(`static/img/${req.params.fileName}`, { root });
});
app.get('*/search/:by/:query', async (req, res) => {
  const { by, query } = req.params;
  const render = require('./dist/ssr').default;
  const markup = await render(req.url, { search: { query, by } });
  res.send(markup);
});
app.get('*/film/:id', async (req,res) => {
  const { id } = req.params;
  const render = require('./dist/ssr').default;
  const markup = await render(req.url, { id });
  res.send(markup);
});
app.get('*', async (req, res) => {
  const render = require('./dist/ssr').default;
  const markup = await render(req.url);
  res.send(markup);
});
console.log('Awaiting requests @ http://localhost:3003');
app.listen(3003);

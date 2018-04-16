const express = require('express');
const app = express(),
root = './src';


app.get('/',(req,res)=>{
  res.sendFile('index.html',{root});
})

app.listen(3003);

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res)=>{
  res.render('index');
});

app.listen(3000 || process.env.PORT, ()=>{
    console.log('Server is running.');
});
'use strict'

const express = require('express')
const path = require('path')

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.json())

app.get('/', (req, res) => {
   res.render('index.html');
});

app.get('/success', (req, res) => {
   res.render('success.html');
});

app.post('/answer', (req, res, next) => {
   const answer = req.body.answer.toString().trim();

   if (answer === '1'){
      console.log('SUCCESS');
      res.render('success.html');
      //res.redirect('/success');
   } else {
      console.log('FAILURE');
      res.render('failure.html');
   }
   
});

app.listen(3000, () => console.log('LISTENING ON PORT 3000...'));
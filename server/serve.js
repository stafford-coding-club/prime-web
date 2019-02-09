'use strict'

import express from "express";

const router = express.Router();

router.use(express.json());
router.use(express.static('public'));

router.get('/', (req, res, next) => {
   res.render('index.html');
});

router.post('/answer', (req, res, next) => {
   
   const question = req.body.question.toString().trim();
   const answer = req.body.answer.toString().trim();

   const compare = eval(question) === eval(answer);

   if (compare){
      res.render('admin.html');
   } else {
      res.render('failure.html');
   }
});

router.use((error, req, res, next) => {
   res.status(500);
   res.render('error.html');
});

module.exports = router;
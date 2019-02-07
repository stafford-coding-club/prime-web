'use strict'

import express from "express";

const router = express.Router();

router.use(express.json());
router.use(express.static('public'));

router.get('/', (req, res, next) => {
   res.sendFile(`${__dirname}/views/index.html`);
});

router.post('/answer', (req, res, next) => {
   
   const question = req.body.question.toString().trim();
   const answer = req.body.answer.toString().trim();

   const compare = eval(question) === eval(answer);

   console.log("hello");

   // TODO: Make this work (Should redirect user to admin file because math equation was a success)
   if (compare){
      res.status(302).sendFile(`${__dirname}/views/admin.html`);
      next();
   } else {
      res.status(200).json({
         message: 'Wrong answer!',
      });
   }
});

router.use((error, req, res, next) => {
   res.status(500);
   res.sendFile(`${__dirname}/views/error.html`);
});

module.exports = router;
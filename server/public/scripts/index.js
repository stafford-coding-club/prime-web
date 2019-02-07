'use strict'

const problem = document.querySelector('#problem');

// TODO: Make more problems
const question = '1 + 1';

problem.innerHTML = question;

const form = document.querySelector('#input');

const API = `${window.location.href}answer`;

form.addEventListener('submit', (event) => {

   event.preventDefault();

   const data = new FormData(form);

   const answer = data.get('answer');

   fetch(API, {
      method: 'POST',
      body: JSON.stringify({
         question,
         answer,
      }),
      headers: {
         'content-type': 'application/json',
      }
   })
   .catch(error => console.error(error));
});
'use strict'

const problem = document.querySelector('#problem');

const question = [
   '1 + 1',
   '5 * 5',
   '1 + 2 * 3',
   '64 / 16',
   '69 + 420',
   '9 % 2',
   '7 * 2'
][Math.floor(Math.random() * 6)];

problem.innerHTML = question;

const form = document.querySelector('#input');
const content = document.querySelector('#content');

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
         'Accept': 'text/html'
      }
   })
   .then(res => res.text())
   .then(page => {

      const data = page.split('<script>');

      content.innerHTML = data[0];

      if (data[1]){
         const script = data[1].replace('</script>', '');
         
         const tag = document.createElement('script');
         tag.innerHTML = script;

         document.head.appendChild(tag);
      }

   })
   .catch(error => console.error(error));
});
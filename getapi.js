const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://emailrep.io/EMAILHERE', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
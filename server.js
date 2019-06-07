'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

app.listen(5000, () => console.log('I am alive'));

app.get('/ping', (request, response) => {
  response.send('pong');
});

const PORT =  3000;

app.use(express.static('./public'));

app.get('/hello', (request, response) => {
  response.status(200).send('Hello');
});

app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well Trained'
  }
  response.status(200).json(airplanes);
});

app.use('*', (request, response) => response.send('Sorry, that route does not exist.'))

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));

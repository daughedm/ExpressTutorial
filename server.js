const express = require('express');
const app = express();
const userData = require('./public/userData.js');

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger);

app.use(express.static('public'))

app.get('/', (request, response) => {
  response.send('hello world');
});

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

app.get('/json', (request, response) => {
  response.status(200).json(userData);
});

app.get('/lazercats', (request, response) => {
  response.sendFile('/Users/daviddaugherty/Documents/Turing/m4/expressTut/public/lazercats.jpg');
});

app.use(function (request, response, next) {
  response.status(404).send("Sorry can't find that!")
})

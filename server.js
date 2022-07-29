const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const axios = require('axios');
// const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';
const API_URL = 'http://localhost:3000';

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use('/*', (req, res) => {
  if (req.baseUrl !== '/favicon.ico') {
    axios.request({
      method: req.method,
      url: `${API_URL}${req.baseUrl}`,
      data: req.body,
      params: req.query,
      headers: { Authorization: process.env.API_KEY },
    }).then((response) => {
      res.status(200).send(response.data);
    }).catch((err) => {
      console.error('API error: ', err);
      res.sendStatus(500);
    });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

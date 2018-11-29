const express = require('express'); // Pegando o framework
const app = express(); // Executando o Express
const consign = require('consign');

app.set('view engine', 'ejs');
app.set('views', './app/views');

consign().include('app/routes')
  .then('config/dbConnection.js')
.into(app);

module.exports = app;
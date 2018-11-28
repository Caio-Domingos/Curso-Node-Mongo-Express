const express = require('express'); // Pegando o framework
const app = express(); // Executando o Express
app.set('view engine', 'ejs');
app.set('views', './app/views');

module.exports = app;
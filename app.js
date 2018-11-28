const express = require('express'); // Pegando o framework
const app = express(); // Executando o Express
app.set('view engine', 'ejs');

// Lista de rotas
app.get('/', (req, res) => {
  res.render('home/index');
});

app.get('/formulario_inclusao_noticia', (req, res) => {
  res.render('admin/form_add_noticia');
});

app.get('/noticias', (req, res) => {
  res.render('noticias/noticias');
});

app.listen(3000, () => {
  console.log('Servidor rodando com Express');
});

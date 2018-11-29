const mysql = require('mysql');

const connMySql = () => {
  console.log('Conexao com o banco de dados foi estabelecida');
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'portal_noticias'
  });
};

module.exports = () => {
  console.log('O autoload carregou a conexao com o banco de dados');
  return connMySql;
};

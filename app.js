const express = require('express')
const app = express();

const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'tarefas'
  });

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

  connection.query('SELECT * FROM atendimentos', function(err, rows, fields){
    if(!err){
        console.log('Resultado: ', rows);
    } else {
        console.log('Erro ao realizar a consulta');
    }
  })

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/src/index.html");
})

app.get('/sobre-empresa', function(req, res) {
    res.sendFile(__dirname + "/src/sobre-empresa.html");
})

app.get('/contato', function(req, res) {
    res.sendFile(__dirname + "/src/contato.html");
})
app.get('/blog', function(req, res) {
    res.sendFile(__dirname + "/src/blog.html");
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})
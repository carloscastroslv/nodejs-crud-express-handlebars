const express = require('express')
const app = express();

// conexão com o mysql
const mysql = require('mysql');

/* Apartir do mysql 8 precisa criar um usuario novo para não dar erro de conexao eu não tive esse problema mas estava
com um usuario novo já criado */
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root', // estou usando o root e não deu problema :)
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

//   connection.query('SELECT * FROM atendimentos', function(err, rows, fields){
//     if(!err){
//         console.log('Resultado: ', rows);
//     } else {
//         console.log('Erro ao realizar a consulta');
//     }
//   })

// connection.query(
//     "INSERT INTO atendimentos(DATA, servico, cliente) VALUES ('2024-03-28','estudando node js', 'Carlos Antonino')"
//     , function(err, result){
//         if(!err){
//             console.log("Usuário cadastrado com sucesso");
//         }else {
//             console.log("Erro ao cadastrar o usuário!");
//         }
//     });

    /** editar usando mesmo metodo acima 
     * https://youtu.be/pp12hoATJvc?list=PLmY5AEiqDWwBHJ3i_8MDSszXXRTcFdkSu&t=181
     */

    /** como apagar um registo da mesma forma acima
     * https://www.youtube.com/watch?v=ayI1PmDay7w&list=PLmY5AEiqDWwBHJ3i_8MDSszXXRTcFdkSu&index=10
     */
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
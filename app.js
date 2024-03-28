const express = require('express')
const app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/src/index.html");
})

app.get('/sobre-empresa', function(req, res) {
    res.sendFile(__dirname + "/src/sobre-empresa.html");
})

app.get('/contato', function(req, res) {
    res.sendFile(__dirname + "/src/contato.html");
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})
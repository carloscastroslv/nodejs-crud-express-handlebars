const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const pagamento = require('./models/Pagamento');

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Configurar o middleware body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/pagamento', function(req, res) {
    res.render('pagamento');
});
app.get('/cad-pagamento', function(req, res) {
    res.render('cad-pagamento');
});

app.post('/add-pagamento', function(req, res) {
    pagamento.create({
        nome: req.body.nome,
        valor: req.body.valor
    }).then(function(){
        res.send("Pagamento cadastrado com sucesso");
    }).catch(function(erro){
        res.send("Erro: Pagamento não foi salvo com sucesso" + erro);
    })

    // res.send(
    //     "<h1>Resultado: </h1>" +
    //     "<b>Nome: </b>" + req.body.nome + "<br><b>Valor: </b>" + req.body.valor + "<br>");
});


app.listen(8080);

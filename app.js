const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

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
    res.send(
        "<h1>Resultado: </h1>" +
        "<b>Nome: </b>" + req.body.nome + "<br><b>Valor: </b>" + req.body.valor + "<br>");
});


app.listen(8080);

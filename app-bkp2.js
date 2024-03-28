const Sequelize = require('sequelize');

const sequelize = new Sequelize('tarefas','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log('Conexão realizada com sucesso!');
}).catch(function(err) {
    console.log('Erro ao realizar a conexão com DB: ' + err);
});

const Products = sequelize.define('Product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    descricao: {
        type: Sequelize.STRING,    
    },

    quant: {
        type: Sequelize.INTEGER,    
    },

    valor: {
        type: Sequelize.DOUBLE(10,2),
    }
});

// Comando abaixo só é descomentado para criar a tabela e depois precisa ser comentado.
// Products.sync({force: true});

// Comando abaixo insere um registro da tabela ou seja se ficar descomentado vai criar duplicidade de registro.
// Products.create({
//     descricao: "Limão",
//     quant: 5,
//     valor: 2.50
// })

const Atendimentos = sequelize.define('Atendimento', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data: {
        type: Sequelize.DATE,
    },
    servico: {
        type: Sequelize.STRING,
    },
    cliente: {
        type: Sequelize.STRING,
    },
    status: {
        type: Sequelize.ENUM('ativo', 'inativo', 'pendente'),
        defaultValue: 'ativo' // Define 'ativo' como valor padrão
    }
});

// Atendimentos.sync({force: true});
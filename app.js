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
  // Model attributes are defined here
  descricao: {
    type: Sequelize.STRING,    
  },
  quant: {
    type: Sequelize.INTEGER,    
  },
  valor: {
    type: Sequelize.DOUBLE,
  }
});

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
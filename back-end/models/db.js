const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("projetofinal", "root", "root", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log('Conectado com sucesso.');
}).catch(function(){
    console.log('Erro ao conectar.');
});

module.exports = sequelize;

const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!");
}).catch(function() {
    console.log("Falha ao se conectar: " + erro);
});
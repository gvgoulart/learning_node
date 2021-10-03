const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');


// Config  
    // Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Conexao com o banco de dados MySql
        const sequelize = new Sequelize('test', 'root', '', {
            host: "localhost",
            dialect: "mysql"
        });
// Rotas

        app.get('/cad', function(req, res){
            res.render('formulario')
        });

        app.post('/add', function(req, res){
            res.send('FORMULÁRIO RECEBIDO')
        });

app.listen(8081, function() {
    console.log("servidor rodando na url tanto faz");
});
const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

Postagem.create({
    titulo: "Um titulo qualquer",
    conteudo: "conteudo teste aslkdmalkdkas"
})


const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type:Sequelize.STRING
    }
});

Usuario.create({
    nome: "Gabriel",
    sobrenome: "Vieira",
    idade: "21",
    email: "teste@gabriel.com"
})
//Usuario.sync({force: true})

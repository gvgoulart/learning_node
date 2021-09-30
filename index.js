const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/blog", function(req, res){
    res.send("Bem bindo ao meu blog!");
});

app.get('/ola/:cargo/:nome/:cor', function(req, res) {
    res.send("<h1>Olá "+req.params.nome+"</h1>" + "<h2> O seu cargo é " + req.params.cargo + " E sua cor favorita é " + req.params.cor + "</h2>")
})

app.listen(8081, function() {
    console.log("servidor rodando na url tanto faz");
});
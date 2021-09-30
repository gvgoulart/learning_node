const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Seja bem-vindo")
})

app.get("/sobre", function(req, res){
    res.send("Minha pagina sobre");
})

app.get("/blog", function(req, res){
    res.send("Bem bindo ao meu blog!");
})

app.listen(8081, function() {
    console.log("servidor rodando na url tanto faz");
});
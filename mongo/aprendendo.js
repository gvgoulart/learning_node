const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo", {
    useMongoClient: true
}).then(() => {
    console.log("Conectado!!")
}).catch((err)=> {
    console.log("Erro!!!")
})
import mongoose from "mongoose";

// Configurando o moongose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo").then(() => {
    console.log("MongoDB conectado!");
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao MongoDB: " + err);
})

// Model - Usuários
const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String,
        require: true
    }
})

// Collection
mongoose.model('usuarios', UsuarioSchema);

const Usuario = mongoose.model('usuarios');

new Usuario({
    nome: "John",
    sobrenome: "Titor",
    email: "john.titor@email.com",
    idade: 13,
    pais: "Flórida"
}).save().then(() => {
    console.log("Usuário criado com sucesso!");
}).catch((err) => {
    console.log("Houve um erro ao registrar o usuário: " + err);
})

// Comandos MongoDB

// show databases; - mostra os bancos de dados
// use nomedatabase; - troca para o db informado
// show collections; (análogo às tabelas no MySQL) - mostra as collections
// db.nomedacollection.find(); - encontra os dados/linhas da collection
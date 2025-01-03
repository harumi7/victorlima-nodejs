// Módulos
import express from 'express';
import handlebars from 'express-handlebars';
import admin from './routes/admin.js';
import mongoose from 'mongoose';

const app = express();

// Configurações

    // O body-parser permite enviar dados de formulário HTML para o servidor
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());

    // Handlebars é um template engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    // Mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/blogapp').then(() => {
        console.log("Conectado ao MongoDB!");
    }).catch((err) => {
        console.log("Erro ao se conectar: " + err);
    })

    // Public
    app.use(express.static('public'));

// Rotas
app.use('/admin', admin);

// Outros
const PORT = 8081;
app.listen(PORT, () => {
    console.log("Servidor rodando!");
})
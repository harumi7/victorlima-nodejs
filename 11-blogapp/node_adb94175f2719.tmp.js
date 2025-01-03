// Módulos
import express from 'express';
import handlebars from 'express-handlebars';
import admin from './routes/admin.js';
import { Sequelize } from "sequelize";

const app = express();

// Configurações

    // O body-parser permite enviar dados de formulário HTML para o servidor
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());

    // Handlebars é um template engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    // Public
    app.use(express.static('public'));

// Rotas
app.use('/admin', admin);

// Outros
const PORT = 8081;
app.listen(PORT, () => {
    console.log("Servidor rodando!");
})
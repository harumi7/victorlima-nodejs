import express from "express";
import { engine } from "express-handlebars";
import Post from "./models/Post.js";

const app = express();

app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', function(req, res) {
    res.render('home');
})

app.get('/cad', function(req, res) {
    res.render('formulario');
})

app.post('/add', function(req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function() {
        res.redirect('/');
    }).catch(function(erro) {
        res.send("Houve um erro: " + erro);
    })
})

app.listen(8081, function() {
    console.log("Servidor rodando na URL http://localhost:8081")
});
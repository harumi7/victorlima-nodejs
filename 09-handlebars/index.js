import express from 'express';
import handlebars from 'express-handlebars';
import Post from './models/Post.js';

// Inicializa uma nova instância da aplicação Express
const app = express();

// Lembrando que: handlebars é uma template engine para JS
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Rota GET para /
app.get('/', function(req, res) {
    Post.findAll().then(function(posts) {
        res.render('home', {posts: posts});
    })
})

// Rota GET para /cad
app.get('/cad', function(req, res) {
    res.render('formulario');
})

// Rota POST para /add
app.post('/add', function(req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function() { // <- Redirecionamento para a rota /
        res.redirect('/');
    }).catch(function(erro) { // <- Tratamento de erro
        res.send("Houve um erro: " + erro);
    })
})

// Deletar post
app.get('/deletar/:id', function(req, res) {
    Post.destroy({where: {'id': req.params.id}}).then(function() {
        res.send("Postagem deletada com sucesso!");
    }).catch(function(erro) {
        res.send("Esta postagem não existe!");
    })
})

// Inicia o servidor na porta 8081
app.listen(8081, function() {
    console.log("Servidor rodando na URL http://localhost:8081");
})

// app.post -> envia os dados de formulário para uma rota
// app.get -> recupera dados de uma rota
import express from 'express';
import Categoria from '../models/Categoria.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('admin/index');
})

router.get('/posts', (req, res) => {
    res.send("Página de posts");
})

router.get('/categorias', (req, res) => {
    res.render("admin/categorias");
})

router.get('/categorias/add', (req, res) => {
    res.render("admin/addcategorias");
})

router.post('/categorias/nova', (req, res) => {
    const novaCategoria = {
        nome: req.body.nome,
        slug: req.body.slug
    };

    new Categoria(novaCategoria).save().then(() => {
        console.log("Categoria salva com sucesso!");
        res.redirect('/categorias'); // Redireciona após salvar
    }).catch((err) => {
        console.log("Erro ao salvar categoria.");
        res.status(500).send("Erro ao salvar categoria."); // Envia status de erro (status 500 significa erro no servidor)
    })
})

export default router;
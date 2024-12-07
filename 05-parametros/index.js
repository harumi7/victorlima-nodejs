import express from "express";

const app = express();

app.get("/ola/:nome/:cargo/:cor", (req, res) => {
    res.send("<h1>Olá, meu nome é " + req.params.nome + "</h1>");
})

app.listen(8081, () => {
    console.log("Servidor rodando na URL http://localhost/8081");
});
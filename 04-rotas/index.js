import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Seja bem-vindo!");
});

app.get("/sobre", (req, res) => {
    res.send("Essa é a página que fala um pouquinho mais sobre o website!");
});

app.get("/contact", (req, res) => {
    res.send("Contatos... Alô? O telefone se encontra desligado, por favor, tente novamente.");
});

app.listen(8081, () => {
    console.log("Servidor rodando na URL http://localhost/8081");
});
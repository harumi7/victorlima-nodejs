import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", (req, res) => {
    res.sendFile(__dirname + "/html/sobre.html");
})

app.listen(8081, () => {
    console.log("Servidor rodando na URL http://localhost/8081");
});
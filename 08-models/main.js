import { Sequelize } from "sequelize";

const sequelize = new Sequelize("mydb", "root", "SENHA7", {
    host: "localhost",
    dialect: "mysql"
});

const postagem = sequelize.define("postagens", {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

postagem.create({
    titulo: "Spotify wrapped is available!",
    conteudo: "Today, Wednesday, Spotify wrapped is out!"
});

postagem.sync();


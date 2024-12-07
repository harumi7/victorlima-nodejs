import { Sequelize } from "sequelize";

const sequelize = new Sequelize("mydb", "root", "SENHA7", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso!");
}).catch((erro) => {
    console.log(`Falha ao se conectar: ${erro}`);
});
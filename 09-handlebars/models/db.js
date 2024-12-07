import { Sequelize } from "sequelize";

// Conexão com o banco de dados MySQL
const sequelize = new Sequelize("postapp", "root", "SENHA7", {
    host: "localhost",
    dialect: "mysql"
});

// Exporta
export default {
    Sequelize: Sequelize,
    sequelize: sequelize
}
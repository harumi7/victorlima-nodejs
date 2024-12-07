import mongoose from "mongoose";

const CategoriaSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        require: true
    },
    date: {
        type: String,
        default: Date.now()
    }
})

const Categoria = mongoose.model('categorias', CategoriaSchema);

export default Categoria;
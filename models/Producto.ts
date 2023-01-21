import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es obligatorio"],
        max: [100, "El nombre no puede tener mas de 100 caracteres"],
        min: [3, "El nombre no puede tener menos de 3 caracteres"],
    },
    descripcion: {
        type: String,
        required: [true, "La descripción es obligatoria"],
        min: [10, "La descripción no puede tener menos de 10 caracteres"],
        max: [1500, "La descripción no puede tener mas de 1500 caracteres"],
    },
    precio: {
        type: Number,
        required: [true, "El precio es obligatorio"],
    },
    stock: {
        type: Number,
        default: 1,
    },
    categoria: {
        type: String,
        required: [true, "La categoria es obligatoria"],
    },
    fecha: {
        type: Date,
        default: Date.now,
    }
});

export default mongoose.models.Producto || mongoose.model("Producto", ProductoSchema);



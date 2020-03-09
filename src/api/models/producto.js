import { Schema, model } from "mongoose";

const ProductoSchema = Schema({
  titulo: String,
  descripcion: String,
  portada: String,
  precio: Number,
  images: Array
});

export default model("productos", ProductoSchema);

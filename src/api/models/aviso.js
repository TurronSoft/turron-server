import { Schema, model } from "mongoose";

const AvisoSchema = Schema({
  mensaje: String
});

export default model("aviso", AvisoSchema);

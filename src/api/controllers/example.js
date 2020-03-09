import Aviso from "../models/aviso";

export default {
  Query: {
    obtenerAvisos: (root, { where }) => {
      return Aviso.find();
    }
  },
  Mutation: {
    crearAviso: (root, { input }) => {
      const nuevoAviso = new Aviso({
        mensaje: input.mensaje
      });
      nuevoAviso.id = nuevoAviso._id;
      return new Promise((resolve, object) => {
        nuevoAviso.save(error => {
          if (error) reject(error);
          else resolve(nuevoAviso);
        });
      });
    }
  }
};

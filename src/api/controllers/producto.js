import Producto from "../models/producto";

export default {
  Query: {
    obtenerProductos: (root, { limit, offset }) => {
      return new Promise((resolve, object) => {
        Producto.find((err, data) => {
          if (err) reject(err);
          else resolve(data);
        })
          .limit(limit)
          .skip(offset);
      });
    }
  },
  Mutation: {
    crearProducto: (root, { input }) => {
      const nuevoProducto = new Producto({
        titulo: input.titulo,
        descripcion: input.descripcion,
        portada: input.portada,
        precio: input.precio,
        images: input.images
      });
      return new Promise(async (resolve, object) => {
        await nuevoProducto.save(err => {
          if (err) reject(err);
          else resolve(nuevoProducto);
        });
      });
    }
  }
};

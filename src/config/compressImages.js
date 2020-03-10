const compress_images = require("compress-images");
import fs from "fs";
import uploadImage from "./uploadImage";

export default (files, nuevaUrl) => {
  const arrayPath = new Array();
  files.forEach(async file => {
    const inputPath = `src/public/uploads/${file.filename}`;
    const outputPath = `src/public/img/`;
    const urlLarga = `${process.cwd()}\\src\\public\\img\\${file.filename}`;

    compress_images(
      // Ruta de entrada
      inputPath,
      // Ruta de salida
      outputPath,
      { compress_force: false, statistic: true, autoupdate: true },
      false,
      { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
      {
        png: {
          engine: "pngquant",
          command: ["--quality=20-50", "-quality", "60"]
        }
      },
      { svg: { engine: "svgo", command: "--multipass" } },
      {
        gif: {
          engine: "gifsicle",
          command: ["--colors", "64", "--use-col=web"]
        }
      },
      // Función para retornar los resultados // Params err, completed, statistic
      function(err, completed, statistic) {
        uploadImage(urlLarga).then(data => {
          nuevaUrl(data);
        });

        fs.unlinkSync(
          `${process.cwd()}\\src\\public\\uploads\\${file.filename}`
        );
      }
    );
  });
};

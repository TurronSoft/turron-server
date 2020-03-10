import multer from "./src/config/multer";
import app from "./src/config/app";
import compressImages from "./src/config/compressImages";
import cors from "cors";
require("dotenv").config();
require("./src/config/db");
require("./src/config/apolloServer");
app.use(cors());

app.post("/upload-images", multer.array("image", 5), async (req, res) => {
  if (req.method === "POST") {
    const urls = [];
    const nuevaUrl = urlData => {
      urls.push(urlData);
      if (urls.length === req.files.length) {
        res.status(200).json({
          message: "images uploaded successfully",
          data: urls
        });
      }
    };
    compressImages(req.files, nuevaUrl);
  } else {
    res.status(405).json({
      err: `${req.method} method not allowed`
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`server: http://localhost:${process.env.PORT}`);
});

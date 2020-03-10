import cloudinary from "./cloudinary";
import fs from "fs";

export default async urlLarga => {
  const uploader = async path => await cloudinary(path, "prueba");
  const newPath = await uploader(urlLarga);

  fs.unlinkSync(urlLarga);
  return newPath;
};

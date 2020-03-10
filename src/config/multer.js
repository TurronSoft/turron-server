import multer from "multer";
import shortid from "shortid";

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, `${process.cwd()}/src/public/uploads`);
  },
  filename: function(req, file, cb) {
    cb(null, `${shortid.generate()}.jpg`);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    //reject file
    cb({ message: "Unsupported file format" }, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

export default upload;

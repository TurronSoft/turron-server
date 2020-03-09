import mongoose from "mongoose";
mongoose.Promise = global.Promise;
const url = process.env.DB_URL;

export default mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conectada");
  })
  .catch(err => {
    console.log(err);
  });

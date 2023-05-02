const mongoose = require("mongoose");



async function conectDb (url) {
  mongoose
  .connect(url)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error(err));

}



module.exports = conectDb;

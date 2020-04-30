const mongoose = require("mongoose");

module.exports = () =>
  mongoose
    .connect("mongodb://mongo:27017/vtex", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("Connected successfully to database..."))
    .catch((err) => console.log(err));

const mongoose = require("mongoose");


const connectDB = (url) => {
  return mongoose
    .connect("mongodb+srv://root:root@cluster0.6dm6w9x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log(`Connected!😃`))
    .catch((error) => console.log(error));
};

module.exports = connectDB;

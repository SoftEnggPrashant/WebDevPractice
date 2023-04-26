const mongoose = require("mongoose");

exports.connectDB = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((connection) => {
      console.log(`Database connection on : ${connection.connection.host}`);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

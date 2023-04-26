const mongoose = require("mongoose");

exports.connectDB = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Database connect on : ${data.connection.host}`);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const mongoose = require("mongoose");
const connectionString = "mongodb://localhost/Pop";

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {

  console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on("error", (err) => {
  console.log(`Mongoose connected error ${err}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

module.exports = connectionString;
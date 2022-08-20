const mongoose = require("mongoose");
dbConnect();
async function dbConnect() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:fwBaHVojdph5gmtA@testcluster.bmpr6.mongodb.net/zephjobs",
      { useNewUrlParser: true }
    );
    console.log("Mongo DB Connection success");
  } catch (err) {
    console.log("Mongo DB Connection failed");
  }
}

module.exports = mongoose;

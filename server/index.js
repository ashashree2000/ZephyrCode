const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", router);

mongoose
  .connect(
    `mongodb+srv://admin:vVo24ZLJXgN6F7xw@testcluster.bmpr6.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000);
    console.log("Mongo Db is conneted. Listening on port 5000");
  })
  .catch((err) => console.log(err));

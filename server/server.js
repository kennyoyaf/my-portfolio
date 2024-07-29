const morgan = require("morgan");
const express = require("express");
const app = express();
const { connectDB } = require("./config/db");
// const cookieParser = require("cookie-parser");
const { readdirSync } = require("fs");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
// const corsOption = require("./utils/corsOption");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(corsOption);

app.get("/", (req, res) => {
  return res.send("Assured Aim FX API running");
});

// all routes are immediately loaded when created
readdirSync("./routes").map(route => {
  app.use("/api", require(`./routes/${route}`));
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch(() => console.log("Database Connection failed"));

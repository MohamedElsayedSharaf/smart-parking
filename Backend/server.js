const express = require("express");
const db = require("./config/db");
const morgan = require("morgan");
const app = express();
const dotenv = require("dotenv").config(".env");

app.use(express.json());

db();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});
const port = process.env.port || 8000;

 app.listen(port, () => {
  console.log(`App is listening at port ${port}`);
});


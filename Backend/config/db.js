const mongoose = require("mongoose");

const db = () => {
    mongoose
      .connect(process.env.DB_URI)
      .then((conn) => {
        console.log(`Database connected at ${conn.connection.host}`);
      })
}
module.exports = db;

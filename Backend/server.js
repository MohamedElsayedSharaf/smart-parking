import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import User from "./models/User.js";
import userRoutes from "./routes/user.js";
import { userData } from "./data/index.js";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use("/api/users", userRoutes);

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  //   User.insertMany(userData)
  //     .then(() => console.log("Data inserted"))
  //     .catch((error) => console.error("Data insertion failed", error));
  // })
  // .catch((error) => console.log(`${error} did not connect`));
  })
  //.catch((error) => console.log(`${error} did not connect`));

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 8000;

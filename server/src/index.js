import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const password = process.env.PASSWORD;

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  `mongodb+srv://hashkim21:${password}@recipe-app.xkipg0g.mongodb.net/recipe-app?retryWrites=true&w=majority`
);

app.listen(3001, () => {
  console.log("listening on port 3001");
});

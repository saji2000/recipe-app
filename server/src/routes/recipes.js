import express from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await RecipeModel.find({});
    res.send(response);
  } catch (err) {
    console.error(err);
  }
});

export { router as recipesRouter };

import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  name: { type: "string", required: true },
  ingredients: [{ type: "string", required: true }],
  instructions: { type: "string", required: true },
  image: { type: "string", required: true },
  cookingTime: { type: "number", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
});

export const RecipeModel = mongoose.model("recipes", RecipeSchema);

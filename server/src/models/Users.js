import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: "string", required: true, unique: true },
  password: { type: "string", required: true },
});

export const UserModel = mongoose.model("user", UserSchema);

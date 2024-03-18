import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { UserModel } from "../models/Users.js";

const router = express.Router();

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Registers a new user
 * @param {Object} req.body - Request body
 * @param {string} req.body.username - The username of the user.
 * @param {string} req.body.password - The password of the user.
 */
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username: username });
  if (user) {
    return res.status(401).json({ message: "User already registered" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({
    username: username,
    password: hashedPassword,
  });

  await newUser.save();

  res.json({ message: "User registered successfully" });
});

/**
 * Logins a user and creates a jwt token
 * @param {Object} req.body - Request body
 * @param {string} req.body.username - The username of the user.
 * @param {string} req.body.password - The password of the user.
 */
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username: username });

  if (!user) {
    return res.status(401).json({ message: "Username or password incorrect" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Username or password incorrect" });
  }

  const token = jwt.sign({ id: user._id }, JWT_SECRET);

  return res.json({ token, userId: user._id });
});

export { router as userRouter };

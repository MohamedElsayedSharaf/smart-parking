import express from "express";
import { createUser, getUsers, getUserById } from "../controllers/user.js";

const router = express.Router();

router.post("/", createUser);      // Create user
router.get("/", getUsers);         // Get all users
router.get("/:id", getUserById);   // Get a user by ID

export default router;

import express from "express";
import {
  createUser,
  getUsers,
  getUser,
  checkPlateNumber,
  deleteUser,
  updateUser,
  updateUserPassword,
} from "../controllers/user.js";
import {
  createUserValidator,
  getUserValidator,
  updateUserPasswordVaildator,
} from "../utilis/userValidator.js";

const router = express.Router();

router.post("/", createUserValidator, createUser); // Create user
router.get("/", getUsers); // Get all users
router.get("/:id", getUserValidator, getUser); // Get a user by ID
router.put("/:id",  updateUser); // Get a user by ID
router.put(
  "/changePassword/:id",
  updateUserPasswordVaildator,
  updateUserPassword
);
router.delete("/:id", deleteUser); // Delete a user by ID
router.post("/check-plate", checkPlateNumber); // New route to check plate

export default router;

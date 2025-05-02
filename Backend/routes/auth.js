import express from "express";
import { loginValidator, signupValidator } from "../utilis/authValidator.js";
import { login, signup } from "../controllers/auth.js";



const router = express.Router();

router.post("/signup", signupValidator, signup);
router.post("/login", loginValidator, login);

export default router;

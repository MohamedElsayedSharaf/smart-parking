import { check } from "express-validator";
import validatorMiddleware from "../middleware/validatorMiddleware.js";
import User from "../models/User.js";


export const signupValidator = [
    check("name")
      .notEmpty()
      .withMessage("User name required")
      .isLength({ min: 2 })
      .withMessage("Too short User name")
      .isLength({ max: 32 })
      .withMessage("Too long User name"),
    check("email")
      .notEmpty()
      .withMessage("Email required")
      .isEmail()
      .withMessage("Invalid Email address")
      .normalizeEmail()
      .trim()
      .custom(async (val) => {
        const user = await User.findOne({ email: val });
        if (user) {
          throw new Error("Email already used");
        }
      }),
    check("password")
      .notEmpty()
      .withMessage("Password required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters")
      .custom((pass, { req }) => {
        if (pass !== req.body.passwordConfirm) {
          throw new Error("Password confirmation is incorrect");
        }
        return true;
      }),
    check("passwordConfirm")
      .notEmpty()
      .withMessage("Password confirmation is required"),
    validatorMiddleware,
  ];
  
export const loginValidator = [
    check("email")
      .notEmpty()
      .withMessage("Email required")
      .isEmail()
      .withMessage("Invalid Email address")
      .normalizeEmail()
      .trim(),
    check("password")
      .notEmpty()
      .withMessage("Password required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    validatorMiddleware,
  ];
  
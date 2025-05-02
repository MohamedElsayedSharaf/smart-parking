import { check, body } from "express-validator";
import bcrypt from 'bcrypt';
import validatorMiddleware from "../middleware/validatorMiddleware.js";
import User from "../models/User.js";

export const getUserValidator = [
  check("id").isMongoId().withMessage("Invalid mongo id"),
  validatorMiddleware,
];
export const createUserValidator = [
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
  check("role").optional(),
  check("phone").optional(),
  validatorMiddleware,
];
export const updateUserValidator = [
  check("id").isMongoId().withMessage("Invalid catUser id"),
  body("name")
    .optional()
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  validatorMiddleware,
];
export const updateUserPasswordVaildator = [
  check("id").isMongoId().withMessage("Invalid user id"),
  check("currentPassword").notEmpty().withMessage("Current password is required"),
  check("passwordConfirm").notEmpty().withMessage("Password confirmation is required"),
  check("password")
    .notEmpty().withMessage("New password is required")
    .custom(async (val, { req }) => {
      // 1) Find user
      const user = await User.findById(req.params.id);
      if (!user) {
        throw new Error("User not found");
      }
      
      // 2) Verify current password
      const isCorrectPassword = await bcrypt.compare(
        req.body.currentPassword,
        user.password
        
      );
      console.log("Provided current password:", req.body.currentPassword);
      console.log("Stored password hash:", user.password);
      if (!isCorrectPassword) {
        throw new Error("Current password is incorrect");
      }
      
      // 3) Verify password confirmation matches
      if (val !== req.body.passwordConfirm) {
        throw new Error("Password confirmation does not match");
      }
      
      // 4) Verify new password is different from current
      if (req.body.currentPassword === val) {
        throw new Error("New password must be different from current password");
      }
      return true;
    }),
  validatorMiddleware,
];
export const deleteUserValidator = [
  check("id").isMongoId().withMessage("Invalid catUser id"),
  validatorMiddleware,
];

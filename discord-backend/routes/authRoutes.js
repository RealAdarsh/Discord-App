const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth/authController");

// validate that correct data is send using joi package

const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

// middleware

const auth = require("../middleware/auth");

const registerSchema = Joi.object({
  // minimum length for username =3 and maximum 12 and password has minimum=6 and max=12
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(12).required(),
  mail: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12).required(),
  mail: Joi.string().email().required(),
});

// validator is used to validate that correct data is send

router.post(
  "/register",
  validator.body(registerSchema),
  authControllers.controllers.postRegister
);

router.post(
  "/login",
  validator.body(loginSchema),
  authControllers.controllers.postLogin
);

// test route to verify if our middleware is working

router.get("/test", auth, (req, res) => {
  res.send("request passed");
});

module.exports = router;

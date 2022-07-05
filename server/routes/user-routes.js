const express = require("express");
const {
  signupController,
  loginController,
  verifyToken,
  getUser,
  refreshToken,
  logout,
} = require("../controllers/user-controller");

const router = express.Router();

//Register
router.post("/signup", signupController);
router.post("/login", loginController);
router.get("/user", verifyToken, getUser);
router.get("/refresh", refreshToken, verifyToken, getUser);
router.post("/logout", verifyToken, logout);
module.exports = router;

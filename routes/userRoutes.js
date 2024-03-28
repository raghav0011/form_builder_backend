const express = require("express");
const { registerUser, userLogin } = require("../controllers/UserController");
const router = express.Router();
const authGuard = require("../middleware/auth")

router.post("/register", registerUser);
router.post("/login", userLogin);

module.exports = router;
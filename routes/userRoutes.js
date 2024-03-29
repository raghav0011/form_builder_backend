const express = require("express");
const { registerUser, userLogin, getForm, postForm } = require("../controllers/UserController");
const router = express.Router();
const authGuard = require("../middleware/auth")

router.post("/register", registerUser);
router.post("/login", userLogin);
router.get("/getForm", authGuard, getForm);
router.post("/postForm",authGuard, postForm);

module.exports = router;
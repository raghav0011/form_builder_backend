const express = require("express");
const router = express.Router();
const authGuard = require("../middleware/auth");
const { registerOrg, orgLogin, createForm, getUserSubmission } = require("../controllers/OrgController");

router.post("/register", registerOrg);
router.post("/login", orgLogin);
router.post("/postForm", authGuard, createForm);
router.get("/getUserSubmission", authGuard, getUserSubmission);


module.exports = router;

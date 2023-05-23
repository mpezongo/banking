const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/auth");

router.post("/register", userControllers.register);
router.post("/login", userControllers.login);
router.post("/logout", userControllers.logout);

module.exports = router;
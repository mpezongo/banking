const express = require("express");
const router = express.Router();
const VMControllers = require("../controllers/VM");

router.post("/Create", VMControllers.Create);
router.post("/getVM", VMControllers.getVM);

module.exports = router;
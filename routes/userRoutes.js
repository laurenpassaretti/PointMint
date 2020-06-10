const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userController");
const { catchErrors } = require("../utils/errorHandlers");
const { protect } = require("./api/userMiddleware");

router.post("/signup", userCtrl.signup);
router.post("/signin", catchErrors(userCtrl.signin));
router.get("/:userId", protect, catchErrors(userCtrl.getUser));

module.exports = router;

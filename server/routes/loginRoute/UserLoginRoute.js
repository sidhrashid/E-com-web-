const express = require("express");
const userLogin = require("../../controller/Login/UserLogin");

const router = express.Router();

router.post("/registernewuser", userLogin.registerNewUser);
router.post("/loginuser", userLogin.loginUser);

router.post("/google-signup", userLogin.googleSignup);

module.exports = router;

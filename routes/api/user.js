const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/signup")
    .post(userController.createUser)

router.route("/login")
    .get(userController.findUser)

router.route("/newroute")
    .get(userController.foo)
    .post(userController.foo)

module.exports = router
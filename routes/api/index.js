const router = require("express").Router();
const userRoutes = require("./user");
const patientRoues = require("./patients")

// User routes
router.use("/user", userRoutes);
router.use("/patients", patientRoues)

module.exports = router;
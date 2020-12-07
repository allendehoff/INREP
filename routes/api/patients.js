const router = require("express").Router();
const patientsController = require("../../controllers/patientsController")

router.route("/new")
    .post(patientsController.newPatient)

router.route("/:id")
    .get(patientsController.findPtById)
    .put(patientsController.updateById)
    
// router.route("/update")

// router.route("/recent")
//     .get(patientsController.findByMostRecent)



module.exports = router
const router = require("express").Router();
const patientsController = require("../../controllers/patientsController")

router.route("/")
    .get(patientsController.findSix)

router.route("/new")
    .post(patientsController.newPatient)

router.route("/:id")
    .get(patientsController.findPtById)

router.route("/vitals/:id")
    .put(patientsController.updateVitals)
    
// router.route("/update")

// router.route("/recent")
//     .get(patientsController.findByMostRecent)



module.exports = router
const router = require("express").Router(); 
const apptController = require("../../controllers/appointmentController")

// router
// .route(":/id")
// .get(apptController.findById)c
// .put(apptController.update)
// .delete(apptController.remove)

router.route("/")
.get(apptController.findAll)
.post(apptController.create)

router.route("/admin")
.get(apptController.findAll)

module.exports = router; 
const router = require("express").Router(); 
const apptController = require("../../controllers/appointmentController")

// router
// .route(":/id")
// .get(apptController.findById)
// .put(apptController.update)
// .delete(apptController.remove)

router.route("/")
.get(apptController.findAll)
.post(apptController.create)

module.exports = router; 
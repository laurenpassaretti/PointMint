const router = require("express").Router(); 
const apptController = require("../../controllers/appointmentController")

router
.route("/email")
.get(apptController.findRequested)

router.route("/")
.get(apptController.findAll)
.post(apptController.create)

router.route("/admin")
.get(apptController.findAll)

module.exports = router; 
const router = require("express").Router(); 
const apptController = require("../../controllers/appointmentController")

router.route("/")
.get(apptController.findAll)
.post(apptController.create)

router
.route(":/id")
.get(apptController.findById)
.put(apptController.update)
.delete(apptController.remove)

module.exports = router; 
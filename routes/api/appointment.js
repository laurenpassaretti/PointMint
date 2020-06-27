const router = require("express").Router(); 
const apptController = require("../../controllers/appointmentController")

router
.route("/email")
.get(apptController.findRequested)
// .put(apptController.update)
// .delete(apptController.remove)

router.route("/")
.get(apptController.findAll)
.post(apptController.create)

module.exports = router; 
const router = require("express").Router(); 
const apptRoutes = require("./appointment"); 

router.use("/appointment", apptRoutes)

module.exports = router; 
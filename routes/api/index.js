const router = require("express").Router(); 
const apptRoutes = require("./appointment"); 

router.use("/appointment", apptRoutes)
// const Appointment = require("../../models/appointment")

// router.post("/api/appointment", ({body}, res) => {
//     Appointment.create(body)
//     .then(dbAppointment => {
//         res.json(dbAppointment)
//     })
//     .catch(err => {
//         res.status(400).json(err)
//     });
// });

// router.get("/api/appointment", (req,res) => {
//     Appointment.find({})
//     // .sort({sort criteria})
//     .then(dbAppointment => {
//         res.json(dbAppointment); 
//     })
//     .catch(err => {
//         res.status(400).json(err)
//     }); 
// }); 

module.exports = router; 
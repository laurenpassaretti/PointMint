const db = require("../models/appointment"); 



module.exports = {
findAll: function(req,res){
    db.Appointment
    .find(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.state(422).json(err))
},
create: function(req,res){
    console.log("made it to appt controller!")
    console.log(req.body)
    db.Appointment
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
},
update: function(req,res){
    db.Appointment
    .findOneAndUpdate({_id: req.params.id}, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).son(err))
},
remove: function(req,res){
    db.Appointment
    .findById({_id: req.params.id})
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
},
findRequested: function(req,res){
    console.log("made it to findRequested")
    
    console.log(req.query.email)
    db.Appointment
    .find({email: req.query.email})
    .then(dbModel => {
    res.json(dbModel)
    console.log(dbModel)
})
    .catch(err => res.state(422).json(err))
}
}; 
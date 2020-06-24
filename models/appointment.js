const mongoose = require("mongoose"); 

const Schema = mongoose.Schema; 

const appointmentSchema = new Schema({
name: {
    type: String,
    trim: true, 
    required: "Enter your name"
}, 
email: {
    type: String,
    trim: true,
    required: "Enter your email address"
},
phone: {
    type: String,
    trim: true, 
    required: "Enter your phone number"
}, 
notes: {
    type: String, 
    trim: true 
}, 
date: {
    type: String,
    // default: Date.now
}

}); 

const Appointment = mongoose.model("Appointment", appointmentSchema); 

module.exports = {Appointment}; 
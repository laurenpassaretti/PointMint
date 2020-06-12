const mongoose = require("mongoose"); 
const db = require("../models"); 

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/pointmint"
); 

const appointmentSeed = [
{
    name: "Scout Doss", 
    email: "scout_doss@gmail.com",
    phone:"408-789-5678",
    notes: "I have been feeling jaw pain and would like to discuss with the doctor",
    date: new Date(Date.now)

},
{
    name: "Luna Doss", 
    email: "luna_doss@gmail.com",
    phone:"408-789-8978",
    notes: "I would like to discuss weight loss options with the doctor",
    date: new Date(Date.now)
},
{
    name: "Bella Passaretti", 
    email: "bellap@gmail.com",
    phone:"530-876-5686",
    notes: "No notes",
    date: new Date(Date.now)
},
{
    name: "Rajah Passaretti", 
    email: "rajah_pass@gmail.com",
    phone:"530-879-9087",
    notes: "I have been having headaches and want to see what the doctor thinks",
    date: new Date(Date.now)
}]

db.Appointment
.remove({})
.then(() => db.Appointment.collection.insertMany(appointmentSeed))
.then(data => {
    console.log(data.result.n + " records inserted!"); 
    process.exit(0); 
})
.catch(err => {
    console.error(err); 
    process.exit(1)
})
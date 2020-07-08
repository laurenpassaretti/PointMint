const mongoose = require("mongoose"); 
const db = require("../models/appointment"); 
const dbUser = require("../models/userModel");
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
    console.log(data.result.n + " appointment records inserted!"); 
    // process.exit(0); 
})
.catch(err => {
    console.error(err); 
    process.exit(1)
})

const staffSeed = [
    {
        email: "secretary@doctoroffice.com",
        name: "Sue Secretary",
        password: "TestSue123",
        user_type: "staff"
    },
    {
        email: "nurse@doctoroffice.com",
        name: "Nancy Nurse",
        password: "TestNancy123",
        user_type: "staff"
    },
    {
        email: "info@admin.com",
        name: "Admin",
        password: "Admin123",
        user_type: "staff"
    },
    {
        email: "admin@admin.com",
        name: "Admin",
        password: "Admin123",
        user_type: "staff"
    },
    {
        email: "foo@bob.com",
        name: "Bob Foo",
        password: "TestBob123"
    },
    {
        email: "bar@mary.com",
        name: "Mary Bar",
        password: "TestMary123"
    }
];

dbUser.deleteMany({})
    .then(() => dbUser.create(staffSeed)
    .then(data => {
        console.log(data.length + " user records inserted!"); 
        process.exit(0); 
    }))    
    .catch(err => {
        console.error(err); 
        process.exit(1)
    });
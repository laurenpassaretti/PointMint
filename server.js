<<<<<<< Updated upstream
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan"); 
const helmet = require("helmet"); 
const cors = require("cors"); 

const PORT = process.env.PORT || 3000;

require ("dotenv").config(); 

const mongoDB = 
process.env.NODE_ENV !== "test"
? process.env.MONGODB
: process.env.MONGODBTEST

require("./models/user"); 
const userRoutes = require("./routes/userRoutes"); 

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet()); 
app.use(cors()); 
app.use(logger("dev")); 
if (process.env.NODE_ENV ! == "production"){
    app.use(morgan("tiny"))
}
app.use("/users", userRoutes)
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pointmint", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api/index.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

module.exports = server; 
=======
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan"); 

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev")); 

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pointmint", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api/index.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
>>>>>>> Stashed changes

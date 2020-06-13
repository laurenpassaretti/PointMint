const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan"); 
const helmet = require("helmet"); 
const cors = require("cors"); 
const routes = require("./routes")

require ("dotenv").config(); 
const PORT = process.env.PORT || 3001;

require("./models/userModel"); 
const userRoutes = require("./routes/userRoutes"); 

require("./models/appointment")
const apptRoutes = require("./routes/api/appointment")


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet()); 
app.use(cors()); 
app.use(logger("dev")); 
if (process.env.NODE_ENV !== "production"){
    app.use(logger("tiny"))
}else{
  app.use(express.static("client/build"));
}
app.use("/users", userRoutes)
app.use("/appointment", apptRoutes)
app.use(express.static("public"));
app.use(routes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pointmint", {
  useNewUrlParser: true,
  useFindAndModify: false
});
mongoose.connection.on("error", err => {
  console.error(err.message);
});

// routes
app.use(require("./routes/api/index.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

const express = require("express");

//some comment too
const routers = require("./routes/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//cd mongodb-osx-x86_64-4.0.5 First mongod and then mongo nodemon index
//Begin the express app
const app = express();
//Connect with the mongodb
mongoose.connect(
  "mongodb://localhost/storiesdatabase",
  { useNewUrlParser: true }
);
app.use(express.static("public"));
app.use(bodyParser.json());
app.use("/api", routers);
//Error handing
//Next middle where because it is next one of route
app.use(function(err, req, res, next) {
  res.status(422).send({ error: err.message });
});

//Listen for the port

app.listen(process.env.port || 3000, function() {
  console.log("now listenin for request");
});

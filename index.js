const express = require("express");
//Test checkin branch
//some change to the master
//some comment too
const routers = require("./routes/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//Mongod index.js
//Begin the express app
const app = express();
//Connect with the mongodb
mongoose.connect(
  "mongodb://localhost/storiesdatabase",
  { useNewUrlParser: true }
);
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

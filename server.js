require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const authRoutes = require('./routes/passport/auth-routes');
const passportSetup = require('./routes/passport/passport-setup')
const router = require("express").Router();


const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/witt");

// Passport

// set up routes
app.use('/auth', authRoutes);

// create home route
// app.get('/', (req, res) => {
//     res.render('home')
// })

// Passport (END)

app.listen(PORT, function() {
  console.log(`API server listening on PORT ${PORT}!`);
});

module.exports = router;

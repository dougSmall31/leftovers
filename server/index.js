const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const path = require("path");
const cors = require("cors");
const controller = require("./controller");
require("dotenv").config();
const passport = require("passport");
const strategy = require(`${__dirname}/strategy.js`);
const session = require("express-session");

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

//auth0
app.use(
  session({
    secret: process.env.CLIENT_SECRET,
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

passport.serializeUser(function(user, done) {
  console.log("serializeUser", user);

  done(null, {
    id: user.id,
    name: user.displayName,
    email: user.emails[0].value,
    picture: user.picture
  });
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

//massive
massive(process.env.CONNECTION_STRING, { scripts: path.join(__dirname, "db") })
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

//Auth endpoints
app.get(
  "/login",
  passport.authenticate("auth0", {
    //success as 'http://localhost:3000/'???
    successRedirect: "/me",
    failureRedirect: "/login",
    failureFlash: true
  })
);
app.get(
  "/me",
  (req, res, next) => {
    req.session.user = req.user;
    next();
  },
  (req, res) => {
    // console.log(req.session, "1111req.session");

    if (req.user) {
      res.redirect("http://localhost:3000/");
      // res.send({
      //   name: req.user.user_name,
      //   email: req.user.email
      // });
    } else {
      res.sendStatus(401);
    }
  }
);

//endpoints
app.get("/api/posts", controller.getAll);
app.post("/api/new", controller.newPost);

app.get("/api/user", (req, res) => {
  // console.log("XXXXXreq.session", req.session.user);
  res.send(req.session.user);
});

//server port
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

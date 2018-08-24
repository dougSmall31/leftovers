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
  // console.log("serializeUser", user);

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
    if (req.user) {
      // console.log(req.user, "this is req.user");

      const dbInstance = req.app.get("db");
      const { name, email, picture, id } = req.user;

      dbInstance.post_user([email]).then(res => {
        // console.log("this is res", res);
        if (!res[0].id) {
          dbInstance.post_user([name, email, picture, id]);
        }
      });

      res.redirect("http://localhost:3000/");
    } else {
      res.sendStatus(401);
    }
  }
);

//ENDPOINTS
//posts
app.get("/api/posts", controller.getAll);
app.post("/api/new", controller.newPost);
app.delete("/api/posts/:id", controller.deletePost, controller.getAll);

//favorite endpoints
app.post("/api/favorites/:id", controller.newFav);
app.get("/api/favs", controller.getFav);
app.delete("/api/favorites/:id", controller.deleteFav, controller.getFav);

//user
app.get("/api/user", (req, res) => {
  res.send(req.session.user);
});

//server port
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

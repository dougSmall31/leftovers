const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const path = require("path");
const cors = require("cors");
const controller = require("./controller");
require("dotenv").config();

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

//massive
massive(process.env.CONNECTION_STRING, { scripts: path.join(__dirname, "db") })
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

//endpoints
app.get("/api/posts", controller.getAll);

//server port
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

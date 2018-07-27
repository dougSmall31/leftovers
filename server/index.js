const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const cors = require("cors");
const controller = require("./controller");

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

//massive

//endpoints

//server port
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

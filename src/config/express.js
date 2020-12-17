const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const routes = require("../routes/index.routes");

const app = express();
app.use(express.json());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(helmet());

app.use(cors());

//defino endpoint general:
app.use("/", routes);

module.exports = app;

require("dotenv").config({ path: "./config.env" });

const express = require("express");
const app = express();

const share = require("share");
require("redis");

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("pad");
});

app.get("/:id", (req, res) => {
    res.render("pad");
});

share.server.attach(app, { db: { type: "redis" } });

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}...`));

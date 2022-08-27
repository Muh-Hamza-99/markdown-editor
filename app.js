require("dotenv").config({ path: "./config.env" });

const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("pad");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}...`));

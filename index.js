const express = require("express");
const path = require("path");
const members = require("./members");
const app = express();

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Middleware custom

const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
  next();
};

app.use(logger);

app.get("/api/members", (req, res) => {
  res.json(members);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server at " + PORT));

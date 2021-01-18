const express = require("express");
const path = require("path");
const app = express();

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Middleware custom
const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
  next();
};

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Members Routes
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server at " + PORT));

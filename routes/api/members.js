const express = require("express");
const members = require("../../members");
const route = express.Router();

route.get("", (req, res) => {
  res.json(members);
});

//GET member using id
route.get("/:id", (req, res) => {
  //req.params is the object that store the params
  const isFound = members.some(
    (member) => parseInt(member.id, 10) === parseInt(req.params.id, 10)
  );
  if (isFound) {
    let result = members.filter((member) => {
      // console.log("MEMBER=> ", member.id, req.params.id);
      return parseInt(member.id, 10) === parseInt(req.params.id, 10);
    });
    res.json(result);
  } else {
    res.status(404).json({ message: "Not found" });
  }
});

route.post("/", (req, res) => {
  const newMember = {};
});

module.exports = route;

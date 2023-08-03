var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});
router.get("/new", function (req, res, next) {
  res.render("form", { title: "Mini Message Board", messages: messages });
});
router.post("/new", function (req, res, next) {
  const newMessage = { added: new Date() };
  newMessage.text = req.body.messageinput;
  newMessage.user = req.body.userinput;
  messages.push(newMessage);
  res.redirect("/");
});

module.exports = router;

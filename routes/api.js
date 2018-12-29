const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Story = require("../models/shareStories");
//request body get data from the endpoints but it could be changer by user input
//Getings Story from database by title
router.get("/shareStories/:title", function(req, res, next) {
  Story.findOne({ title: req.body.title }).then(function(story) {
    res.send(story);
  });
});

//Create content of title
router.post("/shareStories", function(req, res, next) {
  //var story = new Story(req.body);
  //  story.save;
  Story.create(req.body)
    .then(function(story) {
      console.log(req.body);
      res.send(story);
    })
    .catch(next);
});
//Update content of title
router.put("/shareStories/:title", function(req, res, next) {
  Story.findOneAndUpdate({ title: req.body.title }, req.body).then(function() {
    Story.findOne({ title: req.body.title }).then(function(story) {
      res.send(story);
    });
  });
});

//Delte base on the title of content
router.delete("/shareStories/:title", function(req, res, next) {
  console.log(req.body.title);
  Story.findOneAndDelete({ title: req.body.title }).then(function(story) {
    res.send(story);
  });
});

module.exports = router;

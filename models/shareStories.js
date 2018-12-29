const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Share Story Schedma
const ShareStoriesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    require: [true, "Please give a content for you story"]
  },
  date: String
});

const Story = mongoose.model("story", ShareStoriesSchema);
module.exports = Story;

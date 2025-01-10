const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  heading:String,
  subscription:String
});

const PostModel = mongoose.model("user", postSchema);

module.exports = {
  PostModel,
};
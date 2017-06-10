var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  text: String,
  saved: {
    type: Boolean,
    default: false
  }
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;
const mongoose = require("mongoose");

const siteShema = mongoose.Schema({
  url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Sites', siteShema);
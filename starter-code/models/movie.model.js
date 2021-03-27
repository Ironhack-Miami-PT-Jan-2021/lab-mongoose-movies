const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema({
  title: String,
  genre: {
    type: String,
    enum: ["drama", "comedy", "action", "unknown"],
  },
});

module.exports = model("Movie", movieSchema);

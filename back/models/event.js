const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: { type: String, min: 6, max: 255 },
  body: {
    type: String,
    min: 6,
    max: 255,
  },
  image: {
      type: String,
      min: 6,
      max: 255
  },
  date: {
      type: Date,
      default: Date.now,
  }
});

module.exports= mongoose.model("Event", eventSchema, 'events');

const mongoose = require("mongoose");
const { Schema } = mongoose;

// Experience Model Schema
const experienceSchema = new Schema(
  {
    Title: {
      type: String,
      required: true
    },
    ExperienceList: {
      type: String,
      required: true
    },
    BodyText: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Experience = mongoose.model("Experience", experienceSchema);
module.exports = Experience;

const mongoose = require("mongoose");
const { Schema } = mongoose;

//Project Model Schema
const projectSchema = new Schema(
  {
    Image: {
      type: String,
      required: true
    },
    Title: {
      type: String,
      required: true
    },
    SubTitle: {
      type: String,
      required: true
    },
    BodyText: {
      type: String,
      required: true
    },
    Languages: {
      type: String,
      required: true
    },
    Code: {
      type: String,
      required: true
    },
    Source: {
      type: String,
      required: true
    },
    WebLink: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;

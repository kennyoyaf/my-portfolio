const mongoose = require("mongoose");
const { Schema } = mongoose;

//Blog Model Schema
const blogSchema = new Schema(
  {
    Title: {
      type: String,
      required: true
    },
    SubTitle: {
      type: String,
      required: true
    },
    Paragraph: {
      type: String,
      required: true
    },
    Image: {
      type: String,
      required: true
    },
    Catergories: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;

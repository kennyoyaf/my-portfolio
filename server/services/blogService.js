const Blog = require("../models/blogModel");

const blogPost = async body => {
  try {
    const theBlogPost = new Blog(body);

    return (await theBlogPost.save())
      ? [true, theBlogPost]
      : [false, "Error saving todo"];
  } catch (error) {
    [false, error];
  }
};

const getAllBlogPosts = async () => await Blog.find();

const getBlogPost = async id => await Blog.findById();

const editBlogPostByID = async (id, fields) =>
  await Blog.findByIdAndUpdate(id, fields, { new: true }).exec();

const deleteBlogPostByID = async id => await Blog.findByIdAndDelete(id).exec();

module.exports = {
  blogPost,
  getAllBlogPosts,
  getBlogPost,
  editBlogPostByID,
  deleteBlogPostByID
};

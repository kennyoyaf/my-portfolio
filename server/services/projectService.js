const Project = require("../models/experienceModel");

const projectPost = async body => {
  try {
    const theProject = new Project(body);

    return (await theProject.save())
      ? [true, theProject]
      : [false, "Error saving todo"];
  } catch (error) {
    [false, error];
  }
};

const getAllProject = async () => await Project.find();

const getProject = async id => await Project.findById();

const editProjectByID = async (id, fields) =>
  await Project.findByIdAndUpdate(id, fields, { new: true }).exec();

const deleteProjectByID = async id =>
  await Project.findByIdAndDelete(id).exec();

module.exports = {
  projectPost,
  getAllProject,
  getProject,
  editProjectByID,
  deleteProjectByID
};

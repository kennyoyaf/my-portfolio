const Experience = require("../models/experienceModel");

const experiencePost = async body => {
  try {
    const theExperience = new Experience(body);

    return (await theExperience.save())
      ? [true, theExperience]
      : [false, "Error saving todo"];
  } catch (error) {
    [false, error];
  }
};

const getAllExperience = async () => await Experience.find();

const getExperience = async id => await Experience.findById();

const editExperienceByID = async (id, fields) =>
  await Experience.findByIdAndUpdate(id, fields, { new: true }).exec();

const deleteExperienceByID = async id =>
  await Experience.findByIdAndDelete(id).exec();

module.exports = {
  experiencePost,
  getAllExperience,
  getExperience,
  editExperienceByID,
  deleteExperienceByID
};

const project = require("../models/projects.models");
const Validateproject = require("../validation/project.validation");

const Addproject = async (req, res) => {
  const { errors, isValid } = Validateproject(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await project.findOne({ Email: req.body.Email }).then(async (exist) => {
        if (exist) {
          errors.Email = "project Exist";
          res.status(404).json(errors);
        } else {
          await project.create(req.body);
          res.status(201).json({ message: "project added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllprojects = async (req, res) => {
  try {
    const data = await project.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSinglproject = async (req, res) => {
  try {
    const data = await project.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const Updateproject = async (req, res) => {
  const { errors, isValid } = Validateproject(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await project.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};

const Deleteproject = async (req, res) => {
  try {
    await project.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "project deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  Addproject,
  FindAllprojects,
  FindSinglproject,
  Updateproject,
  Deleteproject,
};

const Deps = require("../models/deps.models");
const ValidateDep = require("../validation/deps.validation");
const AddDep = async (req, res) => {
  const { errors, isValid } = ValidateDep(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await Deps.findOne({ Email: req.body.Email }).then(async (exist) => {
        if (exist) {
          errors.Email = "Dep Exist";
          res.status(404).json(errors);
        } else {
          await Deps.create(req.body);
          res.status(201).json({ message: "Dep added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllDep = async (req, res) => {
  try {
    const data = await Deps.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSinglDep = async (req, res) => {
  try {
    const data = await Deps.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateDep = async (req, res) => {
  const { errors, isValid } = ValidateDep(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Deps.findOneAndUpdate(
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

const DeleteDep = async (req, res) => {
  try {
    await Deps.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Dep deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddDep,
  FindAllDep,
  FindSinglDep,
  UpdateDep,
  DeleteDep,
};

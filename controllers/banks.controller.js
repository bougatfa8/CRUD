const Banks = require("../models/Banks.models");
const ValidateBank = require("../validation/Banks.validation");
const AddBank = async (req, res) => {
  const { errors, isValid } = ValidateBank(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await Banks.findOne({ Email: req.body.Email }).then(async (exist) => {
        if (exist) {
          errors.Email = "Bank Exist";
          res.status(404).json(errors);
        } else {
          await Banks.create(req.body);
          res.status(201).json({ message: "Bank added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllBank = async (req, res) => {
  try {
    const data = await Banks.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSinglBank = async (req, res) => {
  try {
    const data = await Banks.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateBank = async (req, res) => {
  const { errors, isValid } = ValidateBank(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Banks.findOneAndUpdate(
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

const DeleteBank = async (req, res) => {
  try {
    await Banks.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Bank deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddBank,
  FindAllBank,
  FindSinglBank,
  UpdateBank,
  DeleteBank,
};

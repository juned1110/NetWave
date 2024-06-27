const User = require("../models/user-model");
const Contact = require("../models/contact-model");

// Getting all users logic
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No user found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// Get single user logic from admin
const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

//User update logic

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUserById = req.body;

    const updatedData = await User.updateOne(
      { _id: id },
      {
        $set: updateUserById,
      }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

// User delete logic from admin
const deleteUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await User.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

// Getting all contacts logic
const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "Contacts not found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

// contacts delete logic from admin
const deleteContactById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Contact.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Contact not found" });
    }
    return res.status(200).json({ message: "Contact Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getUserById,
  updateUserById,
  deleteContactById,
};

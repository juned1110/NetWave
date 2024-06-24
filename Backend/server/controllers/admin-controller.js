const User = require("../models/user-model");
const Contact = require("../models/contact-model");

//Getting all user logic
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    console.log(getAllUsers);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No user found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

//getting all contacts logic
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "contacts not found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllUsers, getAllContacts };

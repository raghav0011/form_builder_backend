// const db = require("../config/dbConfig");
const { db, Form, FormField } = require("../config/dbConfig");
const User = require("../models/User")(db.sequelize, db.DataTypes);
const Submission = require("../models/Submission")(db.sequelize, db.DataTypes);
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userVerify = await User.findOne({ where: { email } });
    if (userVerify) {
      return res.status(400).json({ message: "User Already Registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const token = jwt.sign({ userId: user.id }, "12345678", {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getForm = async (req,res) => {
  try {
    const forms = await Form.findAll({ include: FormField });
    res.status(201).json({ forms });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Server Error" });
  }
}

const postForm = async (req, res) => {
  try {
    const { user_id, form_id, user_data } = req.body;
    const user = await User.findOne({ where: { id: user_id } });

    //Checking If the user is valid or not
    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }

    const submission = await Submission.create({
      form_id,
      user_id,
      user_data
    });

    return res.status(201).json({ message: "Form Submitted successfully", submission });

  } catch (error) {
     console.error("Error logging in:", error);
     res.status(500).json({ message: "Server Error" });
  }
}

module.exports = { registerUser, userLogin, getForm, postForm };
